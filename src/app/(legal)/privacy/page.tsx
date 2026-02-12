import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Sacred Counsel privacy policy detailing how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-medium text-[var(--color-charcoal)] mb-8">
            Privacy Policy
          </h1>
          <p className="text-[var(--color-charcoal-light)] mb-8">
            Last updated: February 2025
          </p>

          <div className="prose prose-lg max-w-none text-[var(--color-charcoal-light)]">
            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Introduction
            </h2>
            <p>
              Sacred Counsel (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your
              privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-medium text-[var(--color-charcoal)] mt-6 mb-3">
              Personal Information You Provide
            </h3>
            <p>When you apply for our services or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Health history and current medications (for safety screening)</li>
              <li>Intentions and goals for your retreat experience</li>
              <li>Emergency contact information</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-medium text-[var(--color-charcoal)] mt-6 mb-3">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we may automatically collect certain
              information including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your retreat applications and bookings</li>
              <li>Conduct safety screenings to ensure appropriate care</li>
              <li>Communicate with you about your retreat or services</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Health Information
            </h2>
            <p>
              We understand the sensitive nature of health information. Any
              health-related data you provide is used solely for safety
              screening purposes to ensure our services are appropriate for you.
              This information is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kept strictly confidential</li>
              <li>Only shared with our medical screening professionals</li>
              <li>Never sold or shared for marketing purposes</li>
              <li>Securely stored and deleted upon request</li>
            </ul>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your experience. You can
              choose to disable cookies through your browser settings, though
              this may affect some website functionality.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these sites and encourage
              you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="text-2xl font-medium text-[var(--color-charcoal)] mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us at:
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
