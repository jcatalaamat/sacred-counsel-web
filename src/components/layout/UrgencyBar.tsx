'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, CalendarDays, Users } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

interface UrgencyBarProps {
  retreatDate?: string;
  retreatEndDate?: string;
  spotsRemaining?: number;
  totalSpots?: number;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
}

export function UrgencyBar({
  retreatDate = '2026-04-21',
  retreatEndDate = '2026-04-25',
  spotsRemaining = 4,
  totalSpots = 12,
  ctaText = 'Apply Now',
  ctaHref = '/apply',
  dismissible = true,
}: UrgencyBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}, ${startDate.getFullYear()}`;
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        isScrolled
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <div className="bg-[var(--color-forest)] text-white py-3 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              {/* Date */}
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[var(--color-sage)]" />
                <span className="text-sm font-medium">
                  Next Retreat: {formatDateRange(retreatDate, retreatEndDate)}
                </span>
              </div>

              {/* Spots */}
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-sage)]" />
                <span className="text-sm">
                  <span
                    className={cn(
                      'font-bold',
                      spotsRemaining <= 3 ? 'text-[var(--color-gold)]' : ''
                    )}
                  >
                    {spotsRemaining} spots
                  </span>
                  {' '}remaining
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href={ctaHref}>
                <Button variant="accent" size="sm">
                  {ctaText}
                </Button>
              </Link>

              {dismissible && (
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
