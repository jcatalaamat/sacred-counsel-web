import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for Sacred Counsel retreat services, private homestays, and integration therapy.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-medium text-[var(--color-charcoal)] mb-8">
            Terms of Service
          </h1>
          <p className="text-[var(--color-charcoal-light)] mb-8">
            Last updated: February 2025
          </p>

          <div className="prose prose-lg max-w-none text-[var(--color-charcoal-light)]">
            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing our website or using our services, you agree to be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Our Services
            </h2>
            <p>
              Sacred Counsel offers psychedelic retreat experiences, private
              homestays, integration therapy, and wellness programs. Our
              services are intended for adults (18+) seeking personal growth and
              healing.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Application & Screening
            </h2>
            <p>
              All participants must complete our application process, which
              includes a health screening. We reserve the right to decline
              applications based on safety considerations. This screening is
              designed to protect your wellbeing and is conducted by qualified
              professionals.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Booking & Payment
            </h2>
            <h3 className="text-xl font-medium text-[var(--color-charcoal)] mt-6 mb-3">
              Deposits
            </h3>
            <p>
              A non-refundable deposit is required to secure your spot. Deposit
              amounts vary by service and will be clearly communicated during
              the booking process.
            </p>

            <h3 className="text-xl font-medium text-[var(--color-charcoal)] mt-6 mb-3">
              Full Payment
            </h3>
            <p>
              Full payment is due 30 days prior to your retreat start date.
              Payments not received by this date may result in forfeiture of
              your spot.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--color-charcoal)]">60+ days before retreat:</strong>{' '}
                Full refund minus deposit
              </li>
              <li>
                <strong className="text-[var(--color-charcoal)]">30-59 days before retreat:</strong>{' '}
                50% refund minus deposit
              </li>
              <li>
                <strong className="text-[var(--color-charcoal)]">Less than 30 days:</strong>{' '}
                No refund (credit may be applied to future retreat at our discretion)
              </li>
            </ul>
            <p className="mt-4">
              We understand that circumstances change. Please contact us as soon
              as possible if you need to modify or cancel your booking.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Health & Safety Requirements
            </h2>
            <p>Participants must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete health information</li>
              <li>Disclose all medications, supplements, and substances used</li>
              <li>Follow dietary guidelines (dieta) as instructed</li>
              <li>Refrain from alcohol and recreational substances before and during retreat</li>
              <li>Follow all safety instructions provided by facilitators</li>
            </ul>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Assumption of Risk
            </h2>
            <p>
              Participation in our services involves inherent risks. By choosing
              to participate, you acknowledge that you understand these risks
              and accept full responsibility for your participation. All
              participants will be required to sign a comprehensive waiver and
              release form before attending any retreat or ceremony.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Confidentiality
            </h2>
            <p>
              We maintain strict confidentiality regarding participant
              information and experiences. We ask that participants also respect
              the privacy of fellow guests and refrain from sharing identifying
              information about others without their consent.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Photography & Media
            </h2>
            <p>
              Photography and recording during ceremonies and healing sessions
              is prohibited. Any photos taken during non-ceremonial times should
              not include other participants without their explicit consent.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Code of Conduct
            </h2>
            <p>Participants agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Treat all staff and participants with respect</li>
              <li>Follow the guidance of facilitators during ceremonies</li>
              <li>Maintain appropriate boundaries</li>
              <li>Refrain from disruptive behavior</li>
              <li>Respect the sacred nature of the work</li>
            </ul>
            <p className="mt-4">
              We reserve the right to ask any participant to leave the retreat
              if their behavior endangers themselves or others, without refund.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p>
              Sacred Counsel and its facilitators shall not be liable for any
              indirect, incidental, special, or consequential damages arising
              from your participation in our services, to the fullest extent
              permitted by law.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of Mexico, where our retreat services operate.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website.
              Continued use of our services constitutes acceptance of any
              changes.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <p className="mt-4">
              <strong className="text-[var(--color-charcoal)]">Email:</strong>{' '}
              hello@sacred-counsel.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
