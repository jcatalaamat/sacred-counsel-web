import { NextRequest, NextResponse } from 'next/server';

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

    // In production, you would:
    // 1. Save to database
    // 2. Send notification email to Sacred Counsel
    // 3. Send confirmation email to applicant
    // 4. Add to CRM (if any)

    console.log('Application received:', {
      service: data.service,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // For now, just log and return success
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
