import type { Metadata } from 'next';
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
    images: ['/images/team/together.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/team/together.jpg"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-forest)] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-5xl font-medium">
                    A
                  </div>
                  <p className="text-sm text-white/80">Photo placeholder</p>
                </div>
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-earth)] to-[var(--color-earth-dark)] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-5xl font-medium">
                    L
                  </div>
                  <p className="text-sm text-white/80">Photo placeholder</p>
                </div>
              </div>
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
            <div className="aspect-video rounded-2xl overflow-hidden bg-[var(--color-sand)]">
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-sage-light)] to-[var(--color-forest)] flex items-center justify-center text-white">
                <p className="text-lg font-medium">Map / Location Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ApplyCTA />
    </>
  );
}
