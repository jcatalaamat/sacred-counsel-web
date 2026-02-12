import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/Hero';
import { IntegrationPricing } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { INTEGRATION_FAQS } from '@/lib/faqs';
import { TestimonialGrid } from '@/components/sections/TestimonialCarousel';
import { IntegrationCTA } from '@/components/sections/CTASection';
import { TESTIMONIALS, INTEGRATION_MODALITIES, INTEGRATION_TECHNIQUES, INTEGRATION_FOCUS_AREAS, TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Psychedelic Integration Therapy',
  description:
    'Work 1:1 with Alexa, a licensed psychotherapist specializing in psychedelic integration. Depth psychology, IFS, and nervous system work to help you embody lasting transformation.',
  openGraph: {
    title: 'Psychedelic Integration Therapy | Sacred Counsel',
    description:
      'Licensed psychotherapist specializing in psychedelic integration. Transform your experiences into lasting change.',
    images: ['/images/integration/hero.jpg'],
  },
};

// Filter testimonials for integration
const integrationTestimonials = TESTIMONIALS.filter(
  (t) => t.service === 'integration'
);

export default function IntegrationPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/integration/hero.jpg"
        title="Integration Therapy"
        subtitle="With Alexa Iya Soro, MA, LMHC"
        description="Embrace all that you are, all that you can become, and learn to live your most purposeful life."
        primaryCTA={{ label: 'Book a Session', href: '#pricing' }}
        secondaryCTA={{ label: 'Learn More', href: '#about' }}
      />

      {/* Introduction */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image/Video placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-sand)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage-light)] to-[var(--color-sage)] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Video Introduction</p>
                  <p className="text-sm text-white/80">Coming Soon</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Meet Your Therapist
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                {TEAM.alexa.name}
              </h2>
              <p className="text-[var(--color-earth)] font-medium mb-4">
                {TEAM.alexa.credentials}
              </p>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  Alexa is a licensed mental health counselor with over a decade of experience
                  in ritual healing, grief processing, and plant medicine integration. Her
                  approach weaves together depth psychology, somatic awareness, and spiritual
                  wisdom.
                </p>
                <p>
                  Whether you&apos;re integrating a recent psychedelic experience, preparing
                  for upcoming ceremony, or simply seeking support on your healing journey,
                  Alexa creates a safe, nonjudgmental space for deep exploration.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-[var(--color-charcoal)]">Education</h4>
                <ul className="space-y-1">
                  {TEAM.alexa.education?.map((item, index) => (
                    <li key={index} className="text-sm text-[var(--color-charcoal-light)] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-[var(--color-charcoal)]">Certifications</h4>
                <ul className="space-y-1">
                  {TEAM.alexa.certifications?.map((item, index) => (
                    <li key={index} className="text-sm text-[var(--color-charcoal-light)] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Therapeutic Approach
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              Modalities & Techniques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Modalities */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-4">
                Core Modalities
              </h3>
              <ul className="space-y-3">
                {INTEGRATION_MODALITIES.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-4">
                Specialized Techniques
              </h3>
              <ul className="space-y-3">
                {INTEGRATION_TECHNIQUES.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-earth)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Areas of Specialty
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              How I Can Help
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {INTEGRATION_FOCUS_AREAS.map((area, index) => (
              <div
                key={index}
                className="p-5 bg-[var(--color-sand)] rounded-xl text-center"
              >
                <span className="text-[var(--color-charcoal)] font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section bg-[var(--color-forest)] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--color-sage-light)] font-medium tracking-wide uppercase text-sm mb-3">
                Is This Right For You?
              </p>
              <h2 className="text-white">
                Integration Therapy May Be For You If...
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'You\'ve had a powerful psychedelic experience and want support making sense of it',
                'You\'re preparing for an upcoming ceremony and want to set clear intentions',
                'You\'re experiencing challenging thoughts or emotions after ceremony',
                'You want to deepen and extend the benefits of your psychedelic experiences',
                'You\'re interested in exploring your inner world with a trauma-informed guide',
                'You\'re working through grief, relationship issues, or major life transitions',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--color-forest)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing">
        <IntegrationPricing />
      </div>

      {/* Testimonials */}
      {integrationTestimonials.length > 0 && (
        <TestimonialGrid
          testimonials={integrationTestimonials}
          title="Client Experiences"
          subtitle="What People Are Saying"
        />
      )}

      {/* FAQ */}
      <FAQSection
        items={INTEGRATION_FAQS}
        title="Frequently Asked Questions"
        subtitle="Integration Therapy FAQ"
      />

      {/* CTA */}
      <IntegrationCTA />
    </>
  );
}
