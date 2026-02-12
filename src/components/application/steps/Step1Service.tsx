'use client';

import { motion } from 'framer-motion';
import { Calendar, Home, Brain, Leaf, ArrowRight } from 'lucide-react';
import { useApplication } from '../ApplicationContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { SERVICES } from '@/lib/constants';

const services = [
  {
    id: 'ayahuasca' as const,
    name: SERVICES.ayahuasca.name,
    description: SERVICES.ayahuasca.description,
    icon: Calendar,
    price: `From $${SERVICES.ayahuasca.startingPrice?.toLocaleString()}`,
  },
  {
    id: 'homestay' as const,
    name: SERVICES.homestay.name,
    description: SERVICES.homestay.description,
    icon: Home,
    price: 'Custom Pricing',
  },
  {
    id: 'integration' as const,
    name: SERVICES.integration.name,
    description: SERVICES.integration.description,
    icon: Brain,
    price: `From $${SERVICES.integration.pricing.single}`,
  },
  {
    id: 'detox' as const,
    name: SERVICES.detox.name,
    description: SERVICES.detox.description,
    icon: Leaf,
    price: `$${SERVICES.detox.price}`,
  },
];

export function Step1Service() {
  const { data, updateData, setCurrentStep } = useApplication();

  const handleSelect = (serviceId: typeof data.service) => {
    updateData({ service: serviceId });
  };

  const handleNext = () => {
    if (data.service) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--color-charcoal)] mb-4">
          What brings you here?
        </h1>
        <p className="text-lg text-[var(--color-charcoal-light)]">
          Select the offering that resonates with your intentions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isSelected = data.service === service.id;

          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(service.id)}
              className={cn(
                'text-left p-6 rounded-2xl border-2 transition-all',
                isSelected
                  ? 'border-[var(--color-forest)] bg-[var(--color-forest)]/5'
                  : 'border-[var(--color-sand-dark)] bg-white hover:border-[var(--color-sage)]'
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-[var(--color-forest)] text-white'
                      : 'bg-[var(--color-sage-light)] text-[var(--color-forest)]'
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal-light)] mb-2 line-clamp-2">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-earth)]">
                    {service.price}
                  </p>
                </div>
              </div>

              {/* Selection Indicator */}
              <div
                className={cn(
                  'absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-colors',
                  isSelected
                    ? 'border-[var(--color-forest)] bg-[var(--color-forest)]'
                    : 'border-[var(--color-sand-dark)]'
                )}
              >
                {isSelected && (
                  <svg
                    className="w-full h-full text-white p-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleNext}
          disabled={!data.service}
          size="lg"
          className="min-w-[200px]"
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
