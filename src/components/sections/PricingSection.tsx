'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface PricingTier {
  name: string;
  price: number;
  description?: string;
  features: string[];
  popular?: boolean;
  href: string;
  ctaText?: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  className?: string;
}

export function PricingSection({
  title = 'Investment',
  subtitle = 'Choose your path',
  tiers,
  className,
}: PricingSectionProps) {
  return (
    <section className={cn('section bg-[var(--color-sand)]', className)}>
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

        {/* Pricing Cards */}
        <div className={cn(
          'grid gap-8 max-w-5xl mx-auto',
          tiers.length === 2 && 'md:grid-cols-2',
          tiers.length === 3 && 'md:grid-cols-3',
          tiers.length > 3 && 'md:grid-cols-2 lg:grid-cols-4'
        )}>
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                tier.popular && 'md:-mt-4 md:mb-4'
              )}
            >
              <Card
                variant={tier.popular ? 'elevated' : 'outlined'}
                padding="lg"
                className={cn(
                  'h-full relative',
                  tier.popular && 'ring-2 ring-[var(--color-forest)]'
                )}
              >
                {tier.popular && (
                  <Badge
                    variant="accent"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                    {tier.name}
                  </h3>
                  {tier.description && (
                    <p className="text-sm text-[var(--color-charcoal-light)]">
                      {tier.description}
                    </p>
                  )}
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[var(--color-forest)]">
                    ${tier.price.toLocaleString()}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.href} className="block">
                  <Button
                    variant={tier.popular ? 'primary' : 'outline'}
                    fullWidth
                  >
                    {tier.ctaText || 'Get Started'}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Integration Therapy Pricing Cards
interface IntegrationPricingProps {
  className?: string;
}

export function IntegrationPricing({ className }: IntegrationPricingProps) {
  const tiers: PricingTier[] = [
    {
      name: 'Single Session',
      price: 170,
      description: 'One 60-minute session',
      features: [
        '60-minute video session',
        'Personalized support',
        'Session notes provided',
        'Email follow-up',
      ],
      href: '/integration#book',
      ctaText: 'Book Session',
    },
    {
      name: '3-Session Package',
      price: 575,
      description: 'Save $35',
      features: [
        'Three 60-minute sessions',
        'Deeper integration work',
        'Session notes provided',
        'Priority scheduling',
        'Email support between sessions',
      ],
      popular: true,
      href: '/integration#book',
      ctaText: 'Choose Package',
    },
    {
      name: '7-Session Package',
      price: 1155,
      description: 'Save $35',
      features: [
        'Seven 60-minute sessions',
        'Comprehensive integration',
        'Session notes provided',
        'Priority scheduling',
        'Unlimited email support',
        'Personalized resources',
      ],
      href: '/integration#book',
      ctaText: 'Choose Package',
    },
  ];

  return <PricingSection tiers={tiers} className={className} />;
}

// Retreat Pricing Table
interface RetreatPricingProps {
  basePrice: number;
  earlyBirdPrice?: number;
  earlyBirdDeadline?: string;
  depositAmount: number;
  inclusions: string[];
  exclusions?: string[];
  extensionPrice?: number;
  className?: string;
}

export function RetreatPricing({
  basePrice,
  earlyBirdPrice,
  earlyBirdDeadline,
  depositAmount,
  inclusions,
  exclusions,
  extensionPrice,
  className,
}: RetreatPricingProps) {
  const isEarlyBirdActive = earlyBirdDeadline
    ? new Date(earlyBirdDeadline) > new Date()
    : false;

  return (
    <section className={cn('section', className)}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              Investment
            </p>
            <h2 className="text-[var(--color-charcoal)]">Retreat Pricing</h2>
          </div>

          <Card variant="elevated" padding="lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pricing */}
              <div>
                <div className="mb-6">
                  {isEarlyBirdActive && earlyBirdPrice && (
                    <div className="mb-4">
                      <Badge variant="warning" className="mb-2">
                        Early Bird - Save ${basePrice - earlyBirdPrice}
                      </Badge>
                      <p className="text-3xl font-bold text-[var(--color-forest)]">
                        ${earlyBirdPrice.toLocaleString()}
                        <span className="text-lg font-normal text-[var(--color-charcoal-light)] line-through ml-3">
                          ${basePrice.toLocaleString()}
                        </span>
                      </p>
                      <p className="text-sm text-[var(--color-charcoal-light)] mt-1">
                        Until {new Date(earlyBirdDeadline!).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  )}
                  {!isEarlyBirdActive && (
                    <p className="text-3xl font-bold text-[var(--color-forest)]">
                      ${basePrice.toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-[var(--color-sand-dark)]">
                    <span className="text-[var(--color-charcoal)]">Deposit to reserve</span>
                    <span className="font-medium">${depositAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[var(--color-sand-dark)]">
                    <span className="text-[var(--color-charcoal)]">Balance due</span>
                    <span className="font-medium">30 days before retreat</span>
                  </div>
                  {extensionPrice && (
                    <div className="flex justify-between py-3 border-b border-[var(--color-sand-dark)]">
                      <span className="text-[var(--color-charcoal)]">+2 Day Extension</span>
                      <span className="font-medium">+${extensionPrice.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <Link href="/apply" className="block mt-8">
                  <Button variant="primary" size="lg" fullWidth>
                    Apply for This Retreat
                  </Button>
                </Link>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="font-medium text-[var(--color-charcoal)] mb-4">
                  What&apos;s Included
                </h4>
                <ul className="space-y-3 mb-8">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{item}</span>
                    </li>
                  ))}
                </ul>

                {exclusions && exclusions.length > 0 && (
                  <>
                    <h4 className="font-medium text-[var(--color-charcoal)] mb-4">
                      Not Included
                    </h4>
                    <ul className="space-y-2 text-[var(--color-charcoal-light)]">
                      {exclusions.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Pre-configured Ayahuasca Retreat Pricing
export function AyahuascaRetreatPricing({ className }: { className?: string }) {
  return (
    <RetreatPricing
      basePrice={3300}
      earlyBirdPrice={3100}
      earlyBirdDeadline="2026-03-21"
      depositAmount={1000}
      inclusions={[
        'Airport pickup and drop-off',
        '5 days / 4 nights accommodation',
        'All organic, plant-based meals',
        '2 ayahuasca ceremonies',
        'Breathwork & meditation sessions',
        'Integration circles',
        'Pre-retreat preparation call',
        'Post-retreat integration call',
        'Nature walks & excursions',
        'Medical screening & support',
      ]}
      exclusions={[
        'Airfare to Mexico City',
        'Travel insurance',
        'Personal expenses',
        'Additional bodywork (available for extra fee)',
      ]}
      extensionPrice={450}
      className={className}
    />
  );
}

// Detox Program Pricing
export function DetoxPricing({ className }: { className?: string }) {
  return (
    <section className={cn('section bg-white', className)}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
            Investment
          </p>
          <h2 className="text-[var(--color-charcoal)] mb-8">Program Pricing</h2>

          <Card variant="elevated" padding="lg">
            <div className="mb-6">
              <p className="text-4xl font-bold text-[var(--color-forest)]">$920</p>
              <p className="text-[var(--color-charcoal-light)] mt-2">
                Complete 21-Day Program
              </p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {[
                'Personalized wellness plan',
                'Bio-individualized diet plan',
                'Complete functional medicine & Ayurvedic supplements',
                'Detox cookbook',
                '4 private video calls with Luke',
                'Ongoing text/email support',
                'Educational resources',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/apply?service=detox" className="block">
              <Button variant="primary" size="lg" fullWidth>
                Start Your Detox Journey
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
