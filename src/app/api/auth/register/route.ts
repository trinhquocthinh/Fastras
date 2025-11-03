import crypto from 'crypto';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { createUser, findUserByEmail } from '@/lib/db';

const JWT_SECRET =
  process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, password, confirmPassword } = body;

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    if (
      !crypto.timingSafeEqual(
        Buffer.from(password),
        Buffer.from(confirmPassword)
      )
    ) {
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

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = createUser({
      email,
      password: hashedPassword,
      fullName,
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        data: {
          user: {
            id: newUser.id,
            email: newUser.email,
            fullName: newUser.fullName,
          },
          token,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}
