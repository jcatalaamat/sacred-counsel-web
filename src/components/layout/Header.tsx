'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logos/logo-basic.png"
                alt="Sacred Counsel"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={cn(
                'font-serif text-xl font-medium transition-colors',
                isScrolled ? 'text-[var(--color-forest)]' : 'text-[var(--color-forest)]'
              )}
            >
              Sacred Counsel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <>
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors',
                      isScrolled
                        ? 'text-[var(--color-charcoal)] hover:text-[var(--color-forest)]'
                        : 'text-[var(--color-charcoal)] hover:text-[var(--color-forest)]'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200',
                      openDropdown === link.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    )}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-[var(--color-sand-dark)] p-2 min-w-[280px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-[var(--color-sand)] transition-colors"
                        >
                          <span className="block text-sm font-medium text-[var(--color-charcoal)]">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="block text-xs text-[var(--color-charcoal-light)] mt-0.5">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-[var(--color-charcoal)] hover:text-[var(--color-forest)]'
                      : 'text-[var(--color-charcoal)] hover:text-[var(--color-forest)]'
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Link href="/apply">
            <Button variant="primary" size="sm">
              Apply Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[var(--color-charcoal)]" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--color-charcoal)]" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-[var(--color-charcoal)]"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform',
                            openDropdown === link.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-200',
                          openDropdown === link.label ? 'max-h-96' : 'max-h-0'
                        )}
                      >
                        <div className="pl-4 pb-2 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-[var(--color-charcoal)] hover:text-[var(--color-forest)]"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" fullWidth>
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
