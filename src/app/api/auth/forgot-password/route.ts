import crypto from 'crypto';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { createResetToken, findUserByEmail } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user
    const user = findUserByEmail(email);

    // Always return success to prevent email enumeration
    // In production, send actual email here
    if (user) {
      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      createResetToken(email, resetToken);

      // In production, send email with reset link
      // eslint-disable-next-line no-console
      console.log(
        `Reset link: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password/${resetToken}`
      );
    }

    return NextResponse.json({
      success: true,
      message:
        'If an account exists with this email, a password reset link has been sent',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}
