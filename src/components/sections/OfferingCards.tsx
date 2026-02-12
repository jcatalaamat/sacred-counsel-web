'use client';

import { motion } from 'framer-motion';
import { OfferingCard } from '@/components/ui/Card';
import { cn } from '@/lib/utils/cn';
import { SERVICES } from '@/lib/constants';

interface OfferingCardsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function OfferingCards({
  title = 'Our Offerings',
  subtitle = 'Pathways to transformation',
  className,
}: OfferingCardsProps) {
  const offerings = [
    {
      ...SERVICES.ayahuasca,
      image: '/images/home/home-offerings-retreat.png',
    },
    {
      ...SERVICES.homestay,
      image: '/images/home/home-offerings-homestay.jpg',
      priceLabel: 'Custom',
    },
    {
      ...SERVICES.integration,
      image: '/images/home/home-offerings-therapy.png',
      startingPrice: SERVICES.integration.pricing.single,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className={cn('section', className)}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {subtitle && (
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-[var(--color-charcoal)]">{title}</h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {offerings.map((offering) => (
            <motion.div key={offering.name} variants={itemVariants}>
              <OfferingCard
                title={offering.name}
                description={offering.description}
                image={offering.image}
                price={offering.startingPrice}
                priceLabel={offering.startingPrice ? 'From' : undefined}
                href={offering.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Detailed offerings for service pages
interface DetailedOfferingProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  price?: number | { label: string; amount: number }[];
  href: string;
  reverse?: boolean;
}

export function DetailedOffering({
  title,
  description,
  features,
  image,
  price,
  href,
  reverse = false,
}: DetailedOfferingProps) {
  return (
    <div
      className={cn(
        'grid lg:grid-cols-2 gap-12 items-center',
        reverse && 'lg:[&>*:first-child]:order-2'
      )}
    >
      {/* Image */}
      <motion.div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[var(--color-charcoal)] mb-4">{title}</h3>
        <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[var(--color-sage)] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-[var(--color-charcoal)]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center gap-6">
          {price && (
            <div>
              {typeof price === 'number' ? (
                <p className="text-2xl font-semibold text-[var(--color-forest)]">
                  From ${price.toLocaleString()}
                </p>
              ) : (
                <div className="space-y-1">
                  {price.map((p, i) => (
                    <p key={i} className="text-sm text-[var(--color-charcoal-light)]">
                      {p.label}: <span className="font-medium text-[var(--color-charcoal)]">${p.amount}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
          <a
            href={href}
            className="inline-flex items-center gap-2 text-[var(--color-forest)] font-medium hover:gap-3 transition-all"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
