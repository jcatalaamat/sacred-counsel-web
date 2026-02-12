'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Check, Loader2 } from 'lucide-react';
import { useApplication } from '../ApplicationContext';
import { Button } from '@/components/ui/Button';

const timezones = [
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Mexico_City', label: 'Mexico City (CST)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Central European Time (CET)' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
  { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' },
  { value: 'other', label: 'Other (specify in notes)' },
];

export function Step5Schedule() {
  const { data, updateData, setCurrentStep, resetForm } = useApplication();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    updateData({ [field]: e.target.value });
  };

  const handleBack = () => {
    setCurrentStep(4);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      resetForm();
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-2xl p-12 shadow-sm border border-[var(--color-sand-dark)]"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-medium text-[var(--color-charcoal)] mb-4">
            Application Received!
          </h1>
          <p className="text-lg text-[var(--color-charcoal-light)] mb-6">
            Thank you for reaching out. We&apos;ll review your application and
            be in touch within 24-48 hours to schedule your discovery call.
          </p>
          <p className="text-sm text-[var(--color-charcoal-light)] mb-8">
            Check your email for a confirmation. If you don&apos;t see it,
            check your spam folder.
          </p>
          <Button href="/" variant="outline">
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--color-charcoal)] mb-4">
          Schedule Your Call
        </h1>
        <p className="text-lg text-[var(--color-charcoal-light)]">
          Let us know your availability for a 30-minute discovery call
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)] space-y-6"
      >
        {/* Calendly Embed Placeholder */}
        <div className="bg-[var(--color-sand)] rounded-xl p-8 text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-[var(--color-forest)]" />
          <p className="text-[var(--color-charcoal)] font-medium mb-2">
            Calendly Booking Widget
          </p>
          <p className="text-sm text-[var(--color-charcoal-light)]">
            The booking calendar will appear here once integrated
          </p>
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Your Timezone *
          </label>
          <select
            value={data.timezone}
            onChange={handleChange('timezone')}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] bg-white focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors"
            required
          >
            <option value="">Select your timezone...</option>
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Anything else you&apos;d like us to know?
          </label>
          <textarea
            value={data.additionalNotes}
            onChange={handleChange('additionalNotes')}
            placeholder="Any additional context, scheduling constraints, or questions..."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[100px] resize-y"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-between mt-8"
      >
        <Button variant="ghost" onClick={handleBack} disabled={isSubmitting}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!data.timezone || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Check className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
