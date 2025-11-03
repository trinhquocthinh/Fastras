import { timingSafeEqual } from 'crypto';

import bcrypt from 'bcryptjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { deleteResetToken, findResetToken, updateUserPassword } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, password, confirmPassword } = body;

    // Validation
    if (!token || !password || !confirmPassword) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    if (!timingSafeEqual(Buffer.from(password), Buffer.from(confirmPassword))) {
      return NextResponse.json(
        { success: false, message: 'Passwords do not match' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: 'Password must be at least 8 characters long',
        },
        { status: 400 }
      );
    }

    // Find reset token
    const resetToken = findResetToken(token);
    if (!resetToken) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password
    const updated = updateUserPassword(resetToken.email, hashedPassword);
    if (!updated) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Delete used reset token
    deleteResetToken(token);

    return NextResponse.json({
      success: true,
      message: 'Password has been reset successfully',
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while resetting password' },
      { status: 500 }
    );
  }
}
