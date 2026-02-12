'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { cn } from '@/lib/utils/cn';
import type { FAQ } from '@/lib/faqs';

interface FAQSectionProps {
  items: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
  columns?: 1 | 2;
}

export function FAQSection({
  items,
  title = 'Frequently Asked Questions',
  subtitle,
  className,
  columns = 1,
}: FAQSectionProps) {
  // Split items for 2-column layout
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  const renderAccordion = (faqItems: FAQ[], keyPrefix = '') => (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((faq, index) => (
        <AccordionItem key={`${keyPrefix}${index}`} value={`${keyPrefix}item-${index}`}>
          <AccordionTrigger className="text-left text-lg">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-[var(--color-charcoal-light)] leading-relaxed">
              {faq.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

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

        {/* FAQ Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            'max-w-4xl mx-auto',
            columns === 2 && 'grid md:grid-cols-2 gap-8'
          )}
        >
          {columns === 1 ? (
            renderAccordion(items)
          ) : (
            <>
              {renderAccordion(leftItems, 'left-')}
              {renderAccordion(rightItems, 'right-')}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Re-export FAQ data from lib for convenience
export { AYAHUASCA_FAQS, INTEGRATION_FAQS, DETOX_FAQS, HOMESTAY_FAQS } from '@/lib/faqs';
export type { FAQ } from '@/lib/faqs';
