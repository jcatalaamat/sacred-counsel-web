import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hello@sacredcounsel.space';

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

    // Send notification email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Sacred Counsel <onboarding@resend.dev>',
        to: [NOTIFICATION_EMAIL],
        subject: `New Newsletter Signup: ${email}`,
        html: `
          <h2>New Newsletter Subscriber</h2>
          <hr />
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>First Name:</strong> ${firstName || 'Not provided'}</li>
          </ul>
          <p><em>Signed up at ${new Date().toISOString()}</em></p>
        `,
      });
    } else {
      console.log('RESEND_API_KEY not set — newsletter signup logged only:', {
        email,
        firstName: firstName || 'Not provided',
        timestamp: new Date().toISOString(),
      });
    }

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
