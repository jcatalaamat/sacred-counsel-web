import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hello@sacredcounsel.space';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = [
      'service',
      'firstName',
      'lastName',
      'email',
      'phone',
      'country',
      'age',
      'previousExperience',
      'medications',
      'physicalHealth',
      'intentions',
      'expectations',
      'timezone',
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Send notification email to Sacred Counsel
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Sacred Counsel <onboarding@resend.dev>',
        to: [NOTIFICATION_EMAIL],
        subject: `New Application: ${data.service} — ${data.firstName} ${data.lastName}`,
        html: `
          <h2>New Application Received</h2>
          <hr />
          <h3>Service</h3>
          <p><strong>${data.service}</strong></p>

          <h3>Personal Information</h3>
          <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Country:</strong> ${data.country}</li>
            <li><strong>Age:</strong> ${data.age}</li>
          </ul>

          <h3>Health & Experience</h3>
          <ul>
            <li><strong>Previous Experience:</strong> ${data.previousExperience}</li>
            <li><strong>Medications:</strong> ${data.medications}</li>
            <li><strong>Physical Health:</strong> ${data.physicalHealth}</li>
            <li><strong>Mental Health:</strong> ${data.mentalHealth || 'Not provided'}</li>
          </ul>

          <h3>Intentions</h3>
          <p>${data.intentions}</p>

          <h3>Expectations</h3>
          <p>${data.expectations}</p>

          <h3>Scheduling</h3>
          <ul>
            <li><strong>Timezone:</strong> ${data.timezone}</li>
            <li><strong>Preferred Dates:</strong> ${data.preferredDates || 'Not specified'}</li>
          </ul>

          ${data.additionalNotes ? `<h3>Additional Notes</h3><p>${data.additionalNotes}</p>` : ''}

          <hr />
          <p><em>Submitted at ${new Date().toISOString()}</em></p>
        `,
      });
    } else {
      console.log('RESEND_API_KEY not set — application logged only:', {
        service: data.service,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully',
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
