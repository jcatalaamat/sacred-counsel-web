import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';
import { AyahuascaItinerary } from '@/components/sections/ItineraryTimeline';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { AyahuascaRetreatPricing } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AYAHUASCA_FAQS } from '@/lib/faqs';
import { TestimonialGrid } from '@/components/sections/TestimonialCarousel';
import { RetreatCTA } from '@/components/sections/CTASection';
import { InclusionsList } from '@/components/sections/AmenityGrid';
import { TESTIMONIALS, RETREAT_AMENITIES, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ayahuasca Retreats in Mexico',
  description:
    'Join our intimate 5-day ayahuasca retreat in Valle de Bravo, Mexico. 2 ceremonies, world-class facilitation, organic meals, and comprehensive integration support.',
  openGraph: {
    title: 'Ayahuasca Retreats | Sacred Counsel',
    description:
      'Transformative 5-day ayahuasca retreat in the mountains of Mexico. Small groups, experienced facilitators, deep integration.',
    images: ['/images/venue/aya-venue-05.jpg'],
  },
};

// Filter testimonials for ayahuasca retreats
const ayahuascaTestimonials = TESTIMONIALS.filter(
  (t) => t.service === 'ayahuasca'
);

// Venue gallery images
const venuePhotos = [
  {
    src: '/images/venue/aya-venue-06.jpg',
    alt: 'Retreat venue overlooking Valle de Bravo',
  },
  {
    src: '/images/venue/aya-venue-05.jpg',
    alt: 'Sacred ceremony space',
  },
  {
    src: '/images/venue/aya-venue-09.jpg',
    alt: 'Pool and relaxation area',
  },
  {
    src: '/images/venue/aya-venue-25.jpg',
    alt: 'Organic dining experience',
  },
  {
    src: '/images/venue/aya-venue-03.jpg',
    alt: 'Peaceful gardens',
  },
  {
    src: '/images/venue/aya-venue-11.jpg',
    alt: 'Comfortable accommodations',
  },
  {
    src: '/images/venue/aya-venue-04.png',
    alt: 'Meditation space',
  },
  {
    src: '/images/venue/aya-venue-14.jpg',
    alt: 'Sunset over the mountains',
  },
];

export default function AyahuascaPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/venue/aya-venue-05.jpg"
        title="Ayahuasca Retreats"
        subtitle="Plant Medicine Ceremonies"
        description="A 5-day, 2-ceremony experience with world-class facilitation at an exquisite venue in Mexico's Central Highlands."
        primaryCTA={{ label: 'Apply Now', href: '/apply?service=ayahuasca' }}
        secondaryCTA={{ label: 'View Pricing', href: '#pricing' }}
      />

      {/* Next Retreat Info Banner */}
      <section className="py-8 bg-[var(--color-forest)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-white text-center md:text-left">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wide mb-1">Next Retreat</p>
              <p className="text-xl font-medium">April 21-25, 2026</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wide mb-1">Spots Available</p>
              <p className="text-xl font-medium">4 of 12 remaining</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wide mb-1">Starting At</p>
              <p className="text-xl font-medium">${SERVICES.ayahuasca.startingPrice?.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                The Experience
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                A Sacred Container for Deep Work
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  Our ayahuasca retreats are designed for those ready to do profound inner work.
                  Over five days, you&apos;ll participate in two carefully facilitated ceremonies,
                  supported by breathwork, meditation, integration circles, and time in nature.
                </p>
                <p>
                  We hold space for 8-12 participants maximum, ensuring each person receives
                  the attention and support they need. Our venue, nestled in Mexico&apos;s Central
                  Highlands just 2 hours from Mexico City, offers the perfect balance of
                  natural beauty and comfortable amenities.
                </p>
                <p>
                  Whether you&apos;re seeking healing, clarity, spiritual connection, or simply
                  a reset, our experienced team will guide you every step of the way—from
                  preparation through ceremony to integration.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/venue/aya-venue-05.jpg"
              >
                <source src="/videos/ayahuasca-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <AyahuascaItinerary />

      {/* Venue Gallery */}
      <PhotoGallery
        images={venuePhotos}
        title="Our Retreat Venue"
        subtitle="Where Magic Happens"
        columns={4}
      />

      {/* What's Included */}
      <InclusionsList
        items={RETREAT_AMENITIES}
        title="What's Included"
        subtitle="Your Investment Includes"
      />

      {/* Pricing */}
      <div id="pricing">
        <AyahuascaRetreatPricing />
      </div>

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={ayahuascaTestimonials}
        title="Guest Experiences"
        subtitle="What People Are Saying"
      />

      {/* Your Facilitators */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Your Facilitators
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              Experienced Guides for Your Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Alexa */}
            <div className="bg-[var(--color-sand)] rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/team/team-alexa.jpg"
                    alt="Alexa Iya Soro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--color-charcoal)]">
                    Alexa Iya Soro
                  </h3>
                  <p className="text-[var(--color-earth)] text-sm mb-3">MA, LMHC</p>
                  <p className="text-[var(--color-charcoal-light)] text-sm">
                    Licensed psychotherapist with 10+ years in ritual healing,
                    grief processing, and plant medicine integration. IFS certified.
                  </p>
                </div>
              </div>
            </div>

            {/* Luke */}
            <div className="bg-[var(--color-sand)] rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/team/team-luke.jpg"
                    alt="Luke DeStefano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--color-charcoal)]">
                    Luke DeStefano
                  </h3>
                  <p className="text-[var(--color-earth)] text-sm mb-3">IHP2</p>
                  <p className="text-[var(--color-charcoal-light)] text-sm">
                    20+ years of ceremony facilitation and musicianship.
                    Integrative Health Practitioner, Kambo facilitator, breathwork guide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/about"
              className="text-[var(--color-forest)] font-medium hover:underline"
            >
              Learn more about your guides →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={AYAHUASCA_FAQS}
        title="Frequently Asked Questions"
        subtitle="Everything You Need to Know"
        columns={2}
      />

      {/* CTA */}
      <RetreatCTA />
    </>
  );
}
