'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface PhotoGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function PhotoGallery({
  images,
  title,
  subtitle,
  columns = 3,
  className,
}: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  };

  return (
    <section className={cn('section', className)}>
      <div className="container">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {subtitle && (
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                {subtitle}
              </p>
            )}
            {title && <h2 className="text-[var(--color-charcoal)]">{title}</h2>}
          </div>
        )}

        {/* Gallery Grid */}
        <div className={cn('grid gap-4', columnClasses[columns])}>
          {images.map((image, index) => (
            <motion.button
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Caption */}
            {images[lightboxIndex].caption && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-lg">{images[lightboxIndex].caption}</p>
                <p className="text-sm text-white/60 mt-1">
                  {lightboxIndex + 1} / {images.length}
                </p>
              </div>
            )}

            {/* Counter */}
            {!images[lightboxIndex].caption && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Masonry variant for more dynamic layouts
export function MasonryGallery({
  images,
  title,
  subtitle,
  className,
}: Omit<PhotoGalleryProps, 'columns'>) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className={cn('section', className)}>
      <div className="container">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {subtitle && (
              <p className="text-[var(--color-earth)] font-medium tracking-wide uppercase text-sm mb-3">
                {subtitle}
              </p>
            )}
            {title && <h2 className="text-[var(--color-charcoal)]">{title}</h2>}
          </div>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              className="relative w-full rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setLightboxIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox - same as above */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
              }}
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
              }}
              className="absolute right-4 z-10 p-2 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="relative max-w-[90vw] max-h-[85vh] w-full h-full">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
