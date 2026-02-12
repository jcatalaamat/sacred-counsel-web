import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Add to ConvertKit or your email provider
    // 2. Possibly add to CRM
    // 3. Send welcome email

    console.log('Newsletter signup:', {
      email,
      firstName: firstName || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    // For now, just log and return success
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
