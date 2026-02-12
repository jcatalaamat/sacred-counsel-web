import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';
import { ApplyCTA } from '@/components/sections/CTASection';
import { TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read stories from guests who have experienced transformative healing at Sacred Counsel retreats and integration therapy.',
  openGraph: {
    title: 'Testimonials | Sacred Counsel',
    description:
      'Real stories of transformation from our retreat participants.',
  },
};

const serviceLabels: Record<string, string> = {
  ayahuasca: 'Ayahuasca Retreat',
  homestay: 'Private Homestay',
  integration: 'Integration Therapy',
  detox: '21-Day Detox',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Stories of Transformation"
        subtitle="Testimonials"
        description="Hear from those who have walked this path before you. Each journey is unique, yet the common thread is profound healing."
        backgroundImage="/images/venue/aya-venue-05.jpg"
      />

      {/* Video Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Video Stories
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              In Their Own Words
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.filter((t) => t.videoUrl).map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[var(--color-sand)] rounded-2xl overflow-hidden"
              >
                <div className="aspect-video bg-[var(--color-charcoal-light)] flex items-center justify-center">
                  <p className="text-white/60 text-sm">
                    Video: {testimonial.name}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-medium text-[var(--color-charcoal)]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[var(--color-charcoal-light)]">
                        {serviceLabels[testimonial.service]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Written Testimonials
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              Guest Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[var(--color-gold)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[var(--color-charcoal)] leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-sand)]">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center text-[var(--color-forest)] font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-[var(--color-charcoal)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--color-charcoal-light)]">
                      {serviceLabels[testimonial.service]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Note */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-charcoal-light)] leading-relaxed">
              Every testimonial shared here is from a real guest who chose to
              share their experience. We respect their privacy and only publish
              with explicit permission. Some names have been changed at the
              request of the individual.
            </p>
          </div>
        </div>
      </section>

      <ApplyCTA />
    </>
  );
}
