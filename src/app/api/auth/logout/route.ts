import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // In a real application, you would invalidate the token on the server
    // For this mock API, we just return success

    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during logout' },
      { status: 500 }
    );
  }
}
