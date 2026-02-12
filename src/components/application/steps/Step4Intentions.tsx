'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useApplication } from '../ApplicationContext';
import { Button } from '@/components/ui/Button';

export function Step4Intentions() {
  const { data, updateData, setCurrentStep, isStepComplete } = useApplication();

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    updateData({ [field]: e.target.value });
  };

  const handleNext = () => {
    if (isStepComplete(4)) {
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    setCurrentStep(3);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--color-charcoal)] mb-4">
          Your Intentions
        </h1>
        <p className="text-lg text-[var(--color-charcoal-light)]">
          Help us understand what you&apos;re seeking from this experience
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)] space-y-6"
      >
        {/* Intentions */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            What is calling you to this work? *
          </label>
          <textarea
            value={data.intentions}
            onChange={handleChange('intentions')}
            placeholder="Share what's drawing you to this experience. What are you hoping to explore, heal, or understand? There are no wrong answers—just share openly."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[150px] resize-y"
            required
          />
        </div>

        {/* Expectations */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            What do you hope to experience or achieve? *
          </label>
          <textarea
            value={data.expectations}
            onChange={handleChange('expectations')}
            placeholder="Describe any specific outcomes you're hoping for. This helps us understand your expectations and have an honest conversation about what's possible."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[120px] resize-y"
            required
          />
        </div>

        {/* Concerns */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Any fears or concerns?
          </label>
          <textarea
            value={data.concerns}
            onChange={handleChange('concerns')}
            placeholder="It's completely normal to have concerns. Sharing them helps us address them in our call."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[100px] resize-y"
          />
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            How did you hear about Sacred Counsel?
          </label>
          <select
            value={data.hearAboutUs}
            onChange={handleChange('hearAboutUs')}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] bg-white focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="instagram">Instagram</option>
            <option value="google">Google Search</option>
            <option value="friend">Friend or Family Referral</option>
            <option value="past-guest">Past Guest Referral</option>
            <option value="podcast">Podcast</option>
            <option value="directory">Retreat Directory</option>
            <option value="other">Other</option>
          </select>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-between mt-8"
      >
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} disabled={!isStepComplete(4)}>
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
