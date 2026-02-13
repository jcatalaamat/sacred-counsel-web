'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'forest' | 'earth' | 'image';
  backgroundImage?: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  backgroundImage,
  className,
}: CTASectionProps) {
  const bgStyles = {
    default: 'bg-[var(--color-sand-dark)]',
    forest: 'bg-[var(--color-forest)] text-white',
    earth: 'bg-[var(--color-earth)] text-white',
    image: 'relative bg-cover bg-center',
  };

  return (
    <section
      className={cn('section', bgStyles[variant], className)}
      style={variant === 'image' && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {variant === 'image' && (
        <div className="absolute inset-0 bg-[var(--color-forest)]/80" />
      )}

      <div className={cn('container relative z-10', variant === 'image' && 'text-white')}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={cn(
            'mb-4',
            (variant === 'forest' || variant === 'earth' || variant === 'image') && 'text-white'
          )}>
            {title}
          </h2>

          {description && (
            <p className={cn(
              'text-lg mb-8 mx-auto',
              variant === 'default' ? 'text-[var(--color-charcoal-light)]' : 'text-white/90'
            )}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryCTA.href}
              variant={variant === 'default' ? 'primary' : 'accent'}
              size="lg"
            >
              {primaryCTA.label}
            </Button>

            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant={variant === 'default' ? 'outline' : 'ghost'}
                size="lg"
                className={variant !== 'default' ? 'text-white border-white/30 hover:bg-white/10' : ''}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Pre-configured CTAs for common use cases
export function ApplyCTA({ className }: { className?: string }) {
  return (
    <CTASection
      title="Ready to Begin Your Journey?"
      description="Take the first step toward transformation. Schedule a free discovery call to discuss your intentions and see if our offerings are right for you."
      primaryCTA={{ label: 'Apply Now', href: '/apply' }}
      secondaryCTA={{ label: 'Schedule a Call', href: '/apply?step=schedule' }}
      variant="forest"
      className={className}
    />
  );
}

export function RetreatCTA({ className }: { className?: string }) {
  return (
    <CTASection
      title="Join Our Next Retreat"
      description="Limited to 12 participants for an intimate, transformative experience. Apply now to secure your spot."
      primaryCTA={{ label: 'Apply for April 21-25', href: '/apply?service=ayahuasca' }}
      secondaryCTA={{ label: 'View Full Itinerary', href: '/ayahuasca#itinerary' }}
      variant="image"
      backgroundImage="/images/venue/aya-venue-05.jpg"
      className={className}
    />
  );
}

export function IntegrationCTA({ className }: { className?: string }) {
  return (
    <CTASection
      title="Continue Your Integration Journey"
      description="Work 1:1 with Alexa to deepen your understanding and embody lasting change."
      primaryCTA={{ label: 'Book a Session', href: '/integration#booking' }}
      secondaryCTA={{ label: 'Learn More', href: '/integration' }}
      variant="earth"
      className={className}
    />
  );
}

export function HomestayContactCTA({ className }: { className?: string }) {
  return (
    <CTASection
      title="Design Your Personalized Retreat"
      description="Every homestay is unique. Let's discuss your intentions and create a custom experience just for you."
      primaryCTA={{ label: 'Start the Conversation', href: '/apply?service=homestay' }}
      variant="default"
      className={className}
    />
  );
}
