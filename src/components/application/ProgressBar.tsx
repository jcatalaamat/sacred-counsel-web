'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useApplication } from './ApplicationContext';

const steps = [
  { number: 1, title: 'Service', shortTitle: 'Service' },
  { number: 2, title: 'About You', shortTitle: 'You' },
  { number: 3, title: 'Health & Experience', shortTitle: 'Health' },
  { number: 4, title: 'Intentions', shortTitle: 'Why' },
  { number: 5, title: 'Schedule Call', shortTitle: 'Call' },
];

export function ProgressBar() {
  const { currentStep, isStepComplete } = useApplication();

  return (
    <div className="w-full py-6">
      <div className="max-w-3xl mx-auto px-4">
        {/* Desktop Progress */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors',
                    currentStep === step.number
                      ? 'bg-[var(--color-forest)] text-white'
                      : isStepComplete(step.number)
                      ? 'bg-[var(--color-sage)] text-white'
                      : 'bg-[var(--color-sand-dark)] text-[var(--color-charcoal-light)]'
                  )}
                >
                  {isStepComplete(step.number) && currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={cn(
                    'mt-2 text-sm',
                    currentStep === step.number
                      ? 'text-[var(--color-forest)] font-medium'
                      : 'text-[var(--color-charcoal-light)]'
                  )}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-4 bg-[var(--color-sand-dark)]">
                  <div
                    className={cn(
                      'h-full bg-[var(--color-sage)] transition-all',
                      currentStep > step.number ? 'w-full' : 'w-0'
                    )}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Progress */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-[var(--color-charcoal-light)]">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm font-medium text-[var(--color-forest)]">
              {steps[currentStep - 1]?.title}
            </span>
          </div>
          <div className="h-2 bg-[var(--color-sand-dark)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-forest)] transition-all"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
