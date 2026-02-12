'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Heart } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Offerings',
      links: [
        { label: 'Ayahuasca Retreats', href: '/ayahuasca' },
        { label: 'Private Homestays', href: '/homestay' },
        { label: 'Integration Therapy', href: '/integration' },
        { label: '21-Day Detox', href: '/detox' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Blog', href: '/blog' },
        { label: 'Reciprocity', href: '/reciprocity' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Apply Now', href: '/apply' },
        { label: 'Contact', href: '/about#contact' },
        { label: 'FAQ', href: '/ayahuasca#faq' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-forest)] text-white">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white/10 rounded-lg p-2">
                  <Image
                    src="/images/logos/logo-basic.png"
                    alt="Sacred Counsel"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="font-serif text-2xl font-medium">Sacred Counsel</span>
              </div>
            </Link>

            <p className="mt-6 text-white/80 leading-relaxed max-w-sm">
              A journey with Sacred Counsel is not an experience. It&apos;s a path.
              20+ years of ceremony facilitation, integration support, and transformative wellness.
            </p>

            {/* Location */}
            <div className="mt-6 flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>{SITE_CONFIG.location.city}, {SITE_CONFIG.location.country}</p>
                <p className="text-sm">{SITE_CONFIG.location.distanceFromMexicoCity}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {currentYear} Sacred Counsel. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>We donate 2% to</span>
            <a
              href="https://imc.fund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold)] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Indigenous Medicine Conservation
              <Heart className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
