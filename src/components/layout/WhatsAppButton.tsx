'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { SITE_CONFIG } from '@/lib/constants';

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    "Hi! I'm interested in learning more about Sacred Counsel's offerings."
  )}`;

  // Show tooltip after 5 seconds on first load
  useState(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsTooltipVisible(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={cn(
          'absolute bottom-full right-0 mb-3 transition-all duration-300',
          isTooltipVisible && !isDismissed
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        <div className="bg-white rounded-lg shadow-xl p-4 max-w-[260px] relative">
          <button
            onClick={() => {
              setIsTooltipVisible(false);
              setIsDismissed(true);
            }}
            className="absolute top-2 right-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-charcoal)]"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-[var(--color-charcoal)] pr-4">
            Have questions? Send us a message on WhatsApp for a quick response.
          </p>
          {/* Triangle pointer */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => !isDismissed && setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className={cn(
          'flex items-center justify-center',
          'w-14 h-14 rounded-full',
          'bg-[#25D366] text-white',
          'shadow-lg hover:shadow-xl',
          'transform hover:scale-110 transition-all duration-300',
          'whatsapp-pulse'
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </a>
    </div>
  );
}
