import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';
import { DetoxTimeline } from '@/components/sections/ItineraryTimeline';
import { DetoxPricing } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { DETOX_FAQS } from '@/lib/faqs';
import { ApplyCTA } from '@/components/sections/CTASection';
import { DETOX_PILLARS, DETOX_INCLUSIONS, TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: '21-Day Metabolic Detox Program',
  description:
    'A comprehensive 21-day detox program combining functional medicine, Ayurvedic principles, and practical lifestyle changes. Perfect for plant medicine preparation.',
  openGraph: {
    title: '21-Day Metabolic Detox | Sacred Counsel',
    description:
      'Reset your metabolism and prepare your body for plant medicine with our comprehensive 21-day program.',
    images: ['/images/detox/detox-stock-fruits.jpg'],
  },
};

export default function DetoxPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/detox/detox-stock-fruits.jpg"
        title="21-Day Metabolic Detox"
        subtitle="Reset & Restore"
        description="A comprehensive program combining functional medicine, Ayurvedic wisdom, and practical lifestyle changes to reset your metabolism and prepare your body for transformation."
        primaryCTA={{ label: 'Start Your Detox', href: '/apply?service=detox' }}
        secondaryCTA={{ label: 'Learn More', href: '#about' }}
      />

      {/* Introduction */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                With Luke DeStefano, IHP2
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                More Than a Diet—A Complete Reset
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  The 21-Day Metabolic Detox is a comprehensive program designed to clear
                  toxins, reset your metabolism, and establish sustainable healthy habits.
                  Whether you&apos;re preparing for plant medicine ceremony or simply want
                  to feel your best, this program provides the foundation for lasting change.
                </p>
                <p>
                  Luke combines his training as an Integrative Health Practitioner with
                  Ayurvedic principles and functional medicine to create a bio-individualized
                  approach. Every aspect—diet, supplements, lifestyle practices—is tailored
                  to your unique constitution and goals.
                </p>
                <p>
                  Over 21 days, you&apos;ll receive hands-on guidance through four private
                  video calls, plus ongoing support via text and email. You&apos;ll learn not
                  just what to do, but why—building the knowledge to maintain your results
                  long after the program ends.
                </p>
              </div>
            </div>

            {/* Luke Photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-sand)]">
              <Image
                src="/images/team/team-luke.jpg"
                alt={TEAM.luke.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8 Pillars */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Holistic Approach
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              The 8 Pillars of Optimal Health
            </h2>
            <p className="text-[var(--color-charcoal-light)] mt-4">
              True health isn&apos;t just about what you eat. Our program addresses
              all eight pillars for complete transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {DETOX_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-medium text-[var(--color-charcoal)]">{pillar}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Timeline */}
      <DetoxTimeline />

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Your Investment
              </p>
              <h2 className="text-[var(--color-charcoal)]">
                What&apos;s Included
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {DETOX_INCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-[var(--color-sand)] rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-forest)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-charcoal)] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section bg-[var(--color-forest)] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--color-sage-light)] font-medium tracking-wide uppercase text-sm mb-3">
                Is This For You?
              </p>
              <h2 className="text-white">
                The 21-Day Detox Is Perfect For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Plant Medicine Preparation',
                  description: 'Prepare your body and mind for ayahuasca, psilocybin, or other ceremonies with a traditional dieta approach.',
                },
                {
                  title: 'Metabolic Reset',
                  description: 'If you\'re dealing with fatigue, brain fog, weight challenges, or just feeling "off," this reset can help.',
                },
                {
                  title: 'Habit Transformation',
                  description: 'Break free from unhealthy patterns—processed foods, sugar addiction, poor sleep—and build lasting healthy habits.',
                },
                {
                  title: 'Post-Retreat Integration',
                  description: 'Extend the benefits of your psychedelic experience by maintaining clean living and conscious choices.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/10 rounded-xl"
                >
                  <h3 className="text-lg font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <DetoxPricing />

      {/* Results */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              What To Expect
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              Common Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { result: 'Increased Energy', description: 'Feel more vibrant and alive throughout the day' },
              { result: 'Mental Clarity', description: 'Clear brain fog and improve focus' },
              { result: 'Better Sleep', description: 'Fall asleep easier and wake refreshed' },
              { result: 'Reduced Inflammation', description: 'Less bloating, joint pain, and skin issues' },
              { result: 'Weight Normalization', description: 'Your body finds its natural set point' },
              { result: 'Sustainable Knowledge', description: 'Understand what works for YOUR body' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center"
              >
                <h3 className="font-medium text-[var(--color-charcoal)] mb-2">
                  {item.result}
                </h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={DETOX_FAQS}
        title="Frequently Asked Questions"
        subtitle="Detox Program FAQ"
      />

      {/* CTA */}
      <ApplyCTA />
    </>
  );
}
