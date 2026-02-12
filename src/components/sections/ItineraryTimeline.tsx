'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface TimelineItem {
  day: string;
  title: string;
  description: string;
  highlights?: string[];
}

interface ItineraryTimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ItineraryTimeline({
  items,
  title = 'Your Journey',
  subtitle = 'Day by Day',
  className,
}: ItineraryTimelineProps) {
  return (
    <section className={cn('section bg-white', className)}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {subtitle && (
            <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-[var(--color-charcoal)]">{title}</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[var(--color-sage-light)]" />

          {/* Items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  'relative grid md:grid-cols-2 gap-4 md:gap-8',
                  index % 2 === 0 ? 'md:text-right' : 'md:[&>*:first-child]:order-2 md:text-left'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={cn('pl-16 md:pl-0', index % 2 === 0 ? 'md:pr-12' : 'md:pl-12')}>
                  <span className="inline-block px-3 py-1 bg-[var(--color-forest)] text-white text-sm font-medium rounded-full mb-3">
                    {item.day}
                  </span>
                  <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul className={cn(
                      'mt-4 space-y-2',
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    )}>
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-earth)] flex items-center gap-2 md:justify-end"
                          style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Circle marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-[var(--color-sand)] border-4 border-[var(--color-sage)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--color-forest)] font-semibold">
                    {index + 1}
                  </span>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pre-configured Ayahuasca Retreat Itinerary
export function AyahuascaItinerary({ className }: { className?: string }) {
  const items: TimelineItem[] = [
    {
      day: 'Day 1',
      title: 'Arrival & Opening Circle',
      description: 'Settle into your accommodations and meet your fellow participants. We gather for an opening circle to set intentions, review the schedule, and begin building the container for our work together.',
      highlights: [
        'Airport pickup arranged',
        'Welcome dinner',
        'Group introductions',
        'Intention setting ceremony',
      ],
    },
    {
      day: 'Day 2',
      title: 'Preparation & First Ceremony',
      description: 'The morning is dedicated to preparation practices—breathwork, meditation, and time in nature. In the evening, we gather for our first ayahuasca ceremony.',
      highlights: [
        'Morning breathwork session',
        'Light plant-based lunch',
        'Pre-ceremony sharing',
        'First ceremony (evening)',
      ],
    },
    {
      day: 'Day 3',
      title: 'Integration Day',
      description: 'A day of rest, reflection, and gentle integration. Optional activities include nature walks, journaling time, massage, or simply being in the peaceful surroundings.',
      highlights: [
        'Optional sunrise meditation',
        'Integration circle',
        'Free time for rest',
        'Optional bodywork',
      ],
    },
    {
      day: 'Day 4',
      title: 'Second Ceremony',
      description: 'After a day of integration, we prepare for our second ceremony. This deeper dive often brings profound insights and continued healing work.',
      highlights: [
        'Morning yoga/movement',
        'Light preparation',
        'Afternoon rest',
        'Second ceremony (evening)',
      ],
    },
    {
      day: 'Day 5',
      title: 'Closing & Departure',
      description: 'We gather for a final integration circle, sharing our experiences and insights. Receive guidance for continuing your integration journey at home. Departures after lunch.',
      highlights: [
        'Final integration circle',
        'Closing ceremony',
        'Farewell brunch',
        'Airport transfers',
      ],
    },
  ];

  return (
    <ItineraryTimeline
      items={items}
      title="5-Day Retreat Itinerary"
      subtitle="Your Journey"
      className={className}
    />
  );
}

// Weekly Timeline for Detox
interface WeeklyTimelineItem {
  week: number;
  title: string;
  description: string;
  activities: string[];
}

interface WeeklyTimelineProps {
  items: WeeklyTimelineItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function WeeklyTimeline({
  items,
  title = 'Your 21-Day Journey',
  subtitle = 'Week by Week',
  className,
}: WeeklyTimelineProps) {
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

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-forest)] text-white font-bold text-lg mb-4">
                {item.week}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--color-charcoal-light)] mb-4">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] mt-1.5 flex-shrink-0" />
                    <span className="text-[var(--color-charcoal)]">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-configured Detox Weekly Timeline
export function DetoxTimeline({ className }: { className?: string }) {
  const items: WeeklyTimelineItem[] = [
    {
      week: 1,
      title: 'Foundation',
      description: 'Building your personalized protocol and establishing new habits.',
      activities: [
        'Initial consultation & assessment',
        'Goal setting & intention work',
        'Protocol education',
        'Resource review & kitchen setup',
      ],
    },
    {
      week: 2,
      title: 'Implementation',
      description: 'Diving deeper into your detox with daily practices and support.',
      activities: [
        'Wellness plan review',
        'Cookbook & meal planning',
        'Kitchen detox guidance',
        'Morning routine establishment',
      ],
    },
    {
      week: 3,
      title: 'Integration',
      description: 'Refining your approach and building sustainable habits.',
      activities: [
        'Toxin identification & removal',
        'Herbal infusion protocols',
        'Protocol adjustments',
        'Long-term sustainability planning',
      ],
    },
  ];

  return <WeeklyTimeline items={items} className={className} />;
}
