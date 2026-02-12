import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/Hero';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { AmenityGrid, OfferingsList } from '@/components/sections/AmenityGrid';
import { FAQSection } from '@/components/sections/FAQSection';
import { HOMESTAY_FAQS } from '@/lib/faqs';
import { TestimonialGrid } from '@/components/sections/TestimonialCarousel';
import { HomestayContactCTA } from '@/components/sections/CTASection';
import { TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Private Homestay Retreats',
  description:
    'Experience a fully personalized retreat at La Fuente, our private homestead in Valle de Bravo. Custom plant medicine ceremonies, therapy, and wellness programs for 1-2 guests.',
  openGraph: {
    title: 'Private Homestay Retreats | Sacred Counsel',
    description:
      'Personalized retreats at our private homestead. Custom plant medicine ceremonies, therapy, and wellness programs.',
    images: ['/images/homestay/main.jpg'],
  },
};

// Filter testimonials for homestay
const homestayTestimonials = TESTIMONIALS.filter(
  (t) => t.service === 'homestay'
);

// Homestay gallery images
const homestayPhotos = [
  {
    src: '/images/homestay/main.jpg',
    alt: 'La Fuente main house',
  },
  {
    src: '/images/homestay/jacuzzi.jpg',
    alt: 'Spring-fed jacuzzi',
  },
  {
    src: '/images/homestay/sauna.jpg',
    alt: 'Turkish sauna',
  },
  {
    src: '/images/homestay/ceremony.jpg',
    alt: 'Private ceremony space',
  },
  {
    src: '/images/homestay/garden.jpg',
    alt: 'Lush gardens',
  },
  {
    src: '/images/homestay/bedroom.jpg',
    alt: 'Guest suite',
  },
  {
    src: '/images/homestay/kitchen.jpg',
    alt: 'Gourmet kitchen',
  },
  {
    src: '/images/homestay/view.jpg',
    alt: 'Mountain views',
  },
  {
    src: '/images/homestay/studio.jpg',
    alt: 'Recording studio',
  },
  {
    src: '/images/homestay/art.jpg',
    alt: 'Art workshop space',
  },
];

export default function HomestayPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/homestay/main.jpg"
        title="Private Homestay Retreats"
        subtitle="Your Personal Sanctuary"
        description="Fully personalized retreats for 1-2 guests at La Fuente, our private homestead in Valle de Bravo. Custom programming, private ceremonies, and world-class amenities."
        primaryCTA={{ label: 'Start the Conversation', href: '/apply?service=homestay' }}
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Welcome to La Fuente
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                A Home, Not a Hotel
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  La Fuente—&quot;The Spring&quot;—is our private homestead in the mountains
                  outside Valle de Bravo, Mexico. Here, we offer something you won&apos;t
                  find at larger retreat centers: complete personalization.
                </p>
                <p>
                  Whether you&apos;re seeking plant medicine ceremony (ayahuasca, 5-MeO-DMT,
                  psilocybin, or Kambo), psychotherapy and integration work, a detox
                  program, or simply time to rest and reset—we design your stay around
                  your specific needs and intentions.
                </p>
                <p>
                  With space for just 1-2 guests at a time, you receive our complete
                  attention. Stay for a weekend or several weeks. Work with one medicine
                  or explore multiple modalities. This is your retreat, your way.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-sand)]">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-sage-light)] to-[var(--color-sage)]" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-sand)] mt-8">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-earth)] to-[var(--color-earth-dark)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery
        images={homestayPhotos}
        title="Experience La Fuente"
        subtitle="Your Private Retreat"
        columns={5}
      />

      {/* Amenities */}
      <AmenityGrid
        title="Amenities & Facilities"
        subtitle="Everything You Need"
        variant="cards"
      />

      {/* Available Offerings */}
      <OfferingsList
        title="Available Offerings"
        subtitle="Customize Your Experience"
      />

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              The Process
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              How Homestay Retreats Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We start with a conversation to understand your intentions, health history, and what you hope to experience.',
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Based on our call, we design a personalized program—duration, modalities, schedule, and any special requests.',
              },
              {
                step: '03',
                title: 'Preparation',
                description: 'Receive your dieta guidelines, preparation practices, and everything you need to arrive ready.',
              },
              {
                step: '04',
                title: 'Your Retreat',
                description: 'Experience deep transformation with our full attention. Every aspect is tailored to your journey.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Investment
            </p>
            <h2 className="text-[var(--color-charcoal)] mb-6">
              Pricing & Packages
            </h2>
            <p className="text-[var(--color-charcoal-light)] mb-8">
              Every homestay is unique, so pricing is determined based on your
              specific program. Length of stay, modalities chosen, and level of
              facilitation all factor into your custom quote.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)]">
              <h3 className="text-2xl font-medium text-[var(--color-charcoal)] mb-4">
                Typical Investment Range
              </h3>
              <p className="text-4xl font-light text-[var(--color-forest)] mb-4">
                $2,500 – $15,000+
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Based on 3-14 day stays including accommodations, meals,
                facilitation, and your chosen modalities.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-[var(--color-sand)] rounded-lg">
                  <p className="font-medium text-[var(--color-charcoal)]">Weekend Reset</p>
                  <p className="text-[var(--color-charcoal-light)]">3-4 days</p>
                </div>
                <div className="p-4 bg-[var(--color-sand)] rounded-lg">
                  <p className="font-medium text-[var(--color-charcoal)]">Deep Dive</p>
                  <p className="text-[var(--color-charcoal-light)]">7-10 days</p>
                </div>
                <div className="p-4 bg-[var(--color-sand)] rounded-lg">
                  <p className="font-medium text-[var(--color-charcoal)]">Extended Journey</p>
                  <p className="text-[var(--color-charcoal-light)]">14+ days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Is This For You?
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              The Homestay Is Ideal For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Couples',
                description: 'Deepen your relationship through shared ceremony and individual work.',
              },
              {
                title: 'Experienced Seekers',
                description: 'Those ready for advanced work with 5-MeO-DMT or multiple ceremonies.',
              },
              {
                title: 'Privacy Seekers',
                description: 'If you prefer a completely private experience over group settings.',
              },
              {
                title: 'Creative Professionals',
                description: 'Artists, musicians, and writers seeking inspiration and breakthrough.',
              },
              {
                title: 'Executives & Entrepreneurs',
                description: 'High performers needing deep reset with complete discretion.',
              },
              {
                title: 'Those in Recovery',
                description: 'Working through addiction or major life transitions with intensive support.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--color-sand)] rounded-xl"
              >
                <h3 className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {homestayTestimonials.length > 0 && (
        <TestimonialGrid
          testimonials={homestayTestimonials}
          title="Guest Experiences"
          subtitle="What Others Say"
        />
      )}

      {/* FAQ */}
      <FAQSection
        items={HOMESTAY_FAQS}
        title="Common Questions"
        subtitle="Homestay FAQ"
      />

      {/* CTA */}
      <HomestayContactCTA />
    </>
  );
}
