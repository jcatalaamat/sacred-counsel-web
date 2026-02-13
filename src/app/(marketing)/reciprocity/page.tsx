import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';
import { Heart, Globe, Users, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reciprocity',
  description:
    'Sacred Counsel donates 2% of all proceeds to organizations supporting indigenous medicine traditions and psychedelic research.',
  openGraph: {
    title: 'Reciprocity | Sacred Counsel',
    description:
      'Our commitment to giving back to indigenous medicine traditions and the communities that hold this wisdom.',
    images: ['/images/other/reciprocity-image.png'],
  },
};

export default function ReciprocityPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundImage="/images/other/reciprocity-image.png"
        title="Reciprocity"
        subtitle="Giving Back"
        description="We believe that working with sacred medicines comes with a responsibility to honor and support the indigenous traditions from which they originate."
      />

      {/* Our Commitment */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                Our Commitment
              </p>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                2% of All Proceeds Donated
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal-light)]">
                <p>
                  Sacred Counsel donates 2% of all proceeds to organizations
                  working to preserve indigenous medicine traditions, support
                  native communities, and advance responsible psychedelic research.
                </p>
                <p>
                  These medicines have been held and protected by indigenous
                  cultures for thousands of years. As practitioners who benefit
                  from this wisdom, we have a duty to give back—not as charity,
                  but as reciprocity.
                </p>
                <p>
                  Every retreat, homestay, therapy session, and detox program
                  contributes directly to this commitment. When you work with us,
                  you are also supporting the preservation of these sacred traditions.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--color-sand)]">
              <Image
                src="/images/other/reciprocity-image.png"
                alt="Supporting indigenous medicine traditions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section bg-[var(--color-sand)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Why It Matters
            </p>
            <h2 className="text-[var(--color-charcoal)]">
              The Importance of Reciprocity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Leaf,
                title: 'Preservation',
                description: 'Supporting the conservation of sacred plant medicines and the ecosystems they depend on.',
              },
              {
                icon: Users,
                title: 'Indigenous Rights',
                description: 'Advocating for the rights of indigenous communities who are the original stewards of these traditions.',
              },
              {
                icon: Globe,
                title: 'Sustainability',
                description: 'Ensuring that the growing interest in plant medicine does not exploit or deplete the source traditions.',
              },
              {
                icon: Heart,
                title: 'Gratitude',
                description: 'Expressing genuine gratitude for the wisdom that has been shared with us through these medicines.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal-light)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Organization */}
      <section className="section bg-[var(--color-forest)] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[var(--color-sage-light)] font-medium tracking-wide uppercase text-sm mb-3">
              Featured Organization
            </p>
            <h2 className="text-white mb-6">
              The Indigenous Medicine Conservation Fund
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              The IMC Fund works to protect endangered plant medicine species,
              support indigenous communities, and ensure that traditional
              healing practices survive for future generations.
            </p>
            <a
              href="https://imc.fund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-lg px-8 py-4 text-lg bg-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold-dark)] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More at imc.fund
            </a>
          </div>
        </div>
      </section>

      {/* How You Contribute */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Your Impact
            </p>
            <h2 className="text-[var(--color-charcoal)] mb-6">
              How You Contribute
            </h2>
            <p className="text-[var(--color-charcoal-light)] text-lg mb-8">
              Every time you participate in a Sacred Counsel offering, a portion
              of your investment goes directly to supporting indigenous medicine
              conservation. No additional action needed—reciprocity is built
              into everything we do.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Retreats', description: '2% of every ayahuasca retreat supports indigenous communities' },
                { label: 'Homestays', description: '2% of every private homestay contributes to conservation' },
                { label: 'Programs', description: '2% of integration therapy and detox programs give back' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-[var(--color-sand)] rounded-xl"
                >
                  <h3 className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal-light)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
