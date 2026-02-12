import { VideoHero } from '@/components/sections/Hero';
import { UrgencyBar } from '@/components/layout/UrgencyBar';
import { OfferingCards } from '@/components/sections/OfferingCards';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { TeamSection } from '@/components/sections/TeamSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AYAHUASCA_FAQS } from '@/lib/faqs';
import { ApplyCTA } from '@/components/sections/CTASection';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { TESTIMONIALS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video */}
      <VideoHero
        videoSrc="/videos/homepage-video.mp4"
        posterImage="/images/home/home-video-thumbnail.jpg"
        title="Find Your Way Back to Yourself"
        subtitle="Integrative Psychedelic Support"
        description="Transformative ayahuasca retreats, private homestays, and personalized integration therapy in the mountains of Mexico."
        primaryCTA={{ label: 'Explore Retreats', href: '/ayahuasca' }}
        secondaryCTA={{ label: 'Book a Call', href: '/apply' }}
      />

      {/* Urgency Bar */}
      <UrgencyBar />

      {/* Our Offerings */}
      <OfferingCards />

      {/* Why Sacred Counsel - Trust Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Why Sacred Counsel
            </p>
            <h2 className="text-[var(--color-charcoal)] mb-6">
              A Sanctuary for Transformation
            </h2>
            <p className="text-[var(--color-charcoal-light)] text-lg">
              We combine decades of experience in plant medicine facilitation, psychotherapy,
              and holistic wellness to create deeply supportive containers for your journey.
              Our intimate retreats prioritize safety, integration, and lasting transformation.
            </p>
          </div>

          {/* Trust Pillars */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-forest)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                Medical Screening
              </h3>
              <p className="text-[var(--color-charcoal-light)]">
                Comprehensive health assessments ensure your safety. We work with qualified professionals to screen all participants.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-forest)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                Small Groups
              </h3>
              <p className="text-[var(--color-charcoal-light)]">
                8-12 participants maximum. Our intimate settings allow for deep personal attention and authentic connection.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-forest)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                Integration Focus
              </h3>
              <p className="text-[var(--color-charcoal-light)]">
                The journey doesn&apos;t end with ceremony. We provide preparation calls and ongoing integration support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={TESTIMONIALS}
        title="What Our Guests Say"
        subtitle="Testimonials"
      />

      {/* Meet Your Guides */}
      <TeamSection
        title="Meet Your Guides"
        subtitle="Your Facilitators"
        variant="compact"
      />

      {/* FAQ Preview */}
      <FAQSection
        items={AYAHUASCA_FAQS.slice(0, 5)}
        title="Common Questions"
        subtitle="FAQ"
      />

      {/* CTA Section */}
      <ApplyCTA />

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
