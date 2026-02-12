'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from '@/components/ui/Carousel';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils/cn';
import type { Testimonial } from '@/types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  showRating?: boolean;
  variant?: 'default' | 'cards' | 'minimal';
  autoplay?: boolean;
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  title = 'What Our Guests Say',
  subtitle,
  showRating = true,
  variant = 'default',
  autoplay = true,
  className,
}: TestimonialCarouselProps) {
  return (
    <section className={cn('section bg-white', className)}>
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

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          autoplay={autoplay}
          autoplayDelay={6000}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className={cn(
                  'pl-4',
                  variant === 'cards' ? 'md:basis-1/2 lg:basis-1/3' : 'md:basis-1/2'
                )}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  showRating={showRating}
                  variant={variant}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-12" />
          <CarouselNext className="-right-4 lg:-right-12" />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}

// Individual Testimonial Card
interface TestimonialCardProps {
  testimonial: Testimonial;
  showRating?: boolean;
  variant?: 'default' | 'cards' | 'minimal';
  index?: number;
}

function TestimonialCard({
  testimonial,
  showRating = true,
  variant = 'default',
  index = 0,
}: TestimonialCardProps) {
  if (variant === 'minimal') {
    return (
      <div className="p-6">
        <Quote className="w-10 h-10 text-[var(--color-sage)] mb-4" />
        <p className="text-lg text-[var(--color-charcoal)] italic leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          {testimonial.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-[var(--color-charcoal)]">{testimonial.name}</p>
            <p className="text-sm text-[var(--color-charcoal-light)] capitalize">
              {testimonial.service} guest
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card variant="outlined" padding="lg" className="h-full">
      <div className="flex flex-col h-full">
        {/* Rating */}
        {showRating && (
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-[var(--color-gold)] text-[var(--color-gold)]"
              />
            ))}
          </div>
        )}

        {/* Quote */}
        <div className="flex-1">
          <Quote className="w-8 h-8 text-[var(--color-sage)]/30 mb-2" />
          <p className="text-[var(--color-charcoal)] leading-relaxed">
            {testimonial.quote}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[var(--color-sand-dark)]">
          {testimonial.image && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--color-sage-light)]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-[var(--color-charcoal)]">{testimonial.name}</p>
            <p className="text-sm text-[var(--color-charcoal-light)] capitalize">
              {testimonial.service === 'ayahuasca' ? 'Retreat' : testimonial.service} guest
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Grid version for testimonials page
interface TestimonialGridProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TestimonialGrid({
  testimonials,
  title = 'What Our Guests Say',
  subtitle,
  className,
}: TestimonialGridProps) {
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} variant="cards" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
