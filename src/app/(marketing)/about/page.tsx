import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';
import { ApplyCTA } from '@/components/sections/CTASection';
import { TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Alexa and Luke, the founders of Sacred Counsel. Learn about our backgrounds, training, and commitment to safe, transformative psychedelic experiences.',
  openGraph: {
    title: 'About Sacred Counsel',
    description:
      'Meet Alexa and Luke, the founders of Sacred Counsel. Years of training, deep experience, and a commitment to your transformation.',
    images: ['/images/team/team-the-flock.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/team/team-the-flock.jpg"
        title="About Sacred Counsel"
        subtitle="Our Story"
        description="Two paths, one calling. We came together through a shared commitment to supporting others on their journey of healing and awakening."
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              How We Began
            </p>
            <h2 className="text-[var(--color-charcoal)] mb-8">
              Our Journey to Sacred Counsel
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-charcoal-light)]">
              <p>
                Sacred Counsel was born from a simple recognition: the psychedelic renaissance
                needs more than just access to medicine—it needs integration, preparation, and
                ongoing support from experienced guides who understand the full journey.
              </p>
              <p>
                We met through our shared work in the plant medicine space and quickly recognized
                a complementary approach. Alexa brings her background in depth psychology,
                trauma-informed therapy, and years of integration work. Luke brings his training
                in ceremony facilitation, functional health, and two decades of musical practice
                in sacred contexts.
              </p>
              <p>
                Together, we created Sacred Counsel to offer what we wished existed when we were
                beginning our own healing journeys: intimate, world-class experiences with genuine
                care before, during, and after. No factory retreats. No spiritual bypassing.
                Just real, grounded support for real transformation.
              </p>
              <p>
                From our home base in Valle de Bravo, Mexico—two hours from Mexico City in the
                beautiful Central Highlands—we host group retreats at an exquisite partner venue
                and offer private homestays at La Fuente, our personal homestead. We also work
                with clients globally through online integration therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Alexa */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-sage-light)]">
              <Image
                src="/images/team/team-alexa.jpg"
                alt="Alexa Iya Soro"
                fill
                className="object-cover"
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Co-Founder & Psychotherapist
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-2">
                {TEAM.alexa.name}
              </h2>
              <p className="text-[var(--color-earth)] font-medium text-lg mb-6">
                {TEAM.alexa.credentials}
              </p>

              <div className="space-y-4 text-[var(--color-charcoal-light)] mb-8">
                <p>
                  Alexa is a licensed mental health counselor with over a decade of experience
                  in ritual healing, grief processing, and plant medicine integration. Her
                  approach weaves together depth psychology, somatic awareness, and spiritual
                  wisdom to support deep transformation.
                </p>
                <p>
                  Trained in Internal Family Systems (IFS), ancestral healing, and Buddhist
                  applications of therapy, Alexa brings a unique blend of clinical rigor and
                  spiritual sensitivity to her work. She believes that true healing happens
                  when we can hold all parts of ourselves with compassion.
                </p>
                <p>
                  Before founding Sacred Counsel, Alexa maintained a private practice in
                  psychedelic integration and grief counseling. She continues to see clients
                  individually while also co-facilitating our group retreats and homestays.
                </p>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h4 className="font-medium text-[var(--color-charcoal)] mb-3">Education</h4>
                <ul className="space-y-2">
                  {TEAM.alexa.education?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--color-charcoal-light)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-medium text-[var(--color-charcoal)] mb-3">Certifications</h4>
                <ul className="space-y-2">
                  {TEAM.alexa.certifications?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--color-charcoal-light)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Luke */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Bio - Left on desktop */}
            <div className="lg:order-1">
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Co-Founder & Facilitator
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-2">
                {TEAM.luke.name}
              </h2>
              <p className="text-[var(--color-earth)] font-medium text-lg mb-6">
                {TEAM.luke.credentials}
              </p>

              <div className="space-y-4 text-[var(--color-charcoal-light)] mb-8">
                <p>
                  Luke is an Integrative Health Practitioner with over 20 years of experience
                  in ceremony facilitation and musicianship. His journey has taken him across
                  Thailand, Vietnam, China, Laos, Nepal, Costa Rica, and Mexico, studying with
                  teachers in various healing traditions.
                </p>
                <p>
                  A trained Kambo facilitator, massage therapist, and breathwork guide, Luke
                  brings a grounded, embodied presence to all his work. His background in the
                  Dharma Mountain lineage of Mahayana Buddhism informs his approach to holding
                  space—patient, compassionate, and deeply attuned to the present moment.
                </p>
                <p>
                  As a musician, Luke provides the ceremonial soundtrack for our retreats,
                  using voice, guitar, and traditional instruments to support the journey.
                  He also leads our 21-Day Metabolic Detox program, combining functional
                  medicine with Ayurvedic principles.
                </p>
              </div>

              {/* Training */}
              <div>
                <h4 className="font-medium text-[var(--color-charcoal)] mb-3">Training & Experience</h4>
                <ul className="space-y-2">
                  {TEAM.luke.training?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--color-charcoal-light)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-earth)] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo - Right on desktop */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-earth)] lg:order-2">
              <Image
                src="/images/team/team-luke.jpg"
                alt="Luke DeStefano"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-[var(--color-forest)] text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-sage-light)] font-medium tracking-wide uppercase text-sm mb-3">
              What Guides Us
            </p>
            <h2 className="text-white">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Safety First',
                description: 'We take safety seriously—medical screening, proper set and setting, experienced facilitation, and integration support are non-negotiable.',
              },
              {
                title: 'Integration Over Experience',
                description: 'The ceremony is just the beginning. We believe the real work happens in integration, which is why we prioritize ongoing support.',
              },
              {
                title: 'Intimate Container',
                description: 'Small groups, personal attention, and genuine relationships. We\'re not running a factory—we\'re holding sacred space.',
              },
              {
                title: 'Cultural Respect',
                description: 'We honor the indigenous traditions from which these medicines come, and give back to the communities that hold this wisdom.',
              },
              {
                title: 'Holistic Approach',
                description: 'Mind, body, spirit, community—true healing addresses all dimensions. Our offerings reflect this integrated view.',
              },
              {
                title: 'Reciprocity',
                description: 'We donate 2% of all proceeds to organizations supporting indigenous medicine traditions and psychedelic research.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Our Home Base
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                Valle de Bravo, Mexico
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  Nestled in the mountains of Mexico&apos;s Central Highlands, Valle de Bravo
                  is a magical pueblo known for its natural beauty, artistic community, and
                  spiritual energy. Just 2.5 hours from Mexico City International Airport,
                  it offers the perfect balance of accessibility and seclusion.
                </p>
                <p>
                  The region&apos;s pine forests, lakes, and waterfalls create an ideal
                  environment for inner work. The town itself maintains its colonial charm
                  while hosting a vibrant community of healers, artists, and seekers from
                  around the world.
                </p>
                <p>
                  Our group retreats take place at an exquisite partner venue with stunning
                  views, while private homestays are held at La Fuente, our personal
                  homestead with all the amenities for deep healing work.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--color-sand)]">
              <Image
                src="/images/home/home-desert-landscape.jpg"
                alt="Valle de Bravo, Mexico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="text-[var(--color-charcoal)] mb-6">
              Contact Us
            </h2>
            <p className="text-[var(--color-charcoal-light)] text-lg mb-10">
              Have questions? We&apos;d love to hear from you. Reach out and we&apos;ll
              respond within 24-48 hours.
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              {/* Email */}
              <a
                href="mailto:hello@sacred-counsel.com"
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center group-hover:bg-[var(--color-forest)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-forest)] group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="font-medium text-[var(--color-charcoal)] mb-1">Email</p>
                <p className="text-[var(--color-charcoal-light)] text-sm">
                  hello@sacred-counsel.com
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center group-hover:bg-[var(--color-forest)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-forest)] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="font-medium text-[var(--color-charcoal)] mb-1">WhatsApp</p>
                <p className="text-[var(--color-charcoal-light)] text-sm">
                  Message us directly
                </p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/sacred.counsel"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center group-hover:bg-[var(--color-forest)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-forest)] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <p className="font-medium text-[var(--color-charcoal)] mb-1">Instagram</p>
                <p className="text-[var(--color-charcoal-light)] text-sm">
                  @sacred.counsel
                </p>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-sand-dark)]">
              <p className="text-[var(--color-charcoal)]">
                <span className="font-medium">Based in:</span> Valle de Bravo, Mexico
              </p>
              <p className="text-[var(--color-charcoal-light)] text-sm mt-1">
                2.5 hours from Mexico City International Airport (MEX)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ApplyCTA />
    </>
  );
}
