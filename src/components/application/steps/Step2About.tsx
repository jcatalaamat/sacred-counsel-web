'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useApplication } from '../ApplicationContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Step2About() {
  const { data, updateData, setCurrentStep, isStepComplete } = useApplication();

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    updateData({ [field]: e.target.value });
  };

  const handleNext = () => {
    if (isStepComplete(2)) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--color-charcoal)] mb-4">
          Tell us about yourself
        </h1>
        <p className="text-lg text-[var(--color-charcoal-light)]">
          This helps us prepare for our conversation
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)] space-y-6"
      >
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={data.firstName}
            onChange={handleChange('firstName')}
            placeholder="Your first name"
            required
          />
          <Input
            label="Last Name"
            value={data.lastName}
            onChange={handleChange('lastName')}
            placeholder="Your last name"
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            value={data.email}
            onChange={handleChange('email')}
            placeholder="your@email.com"
            required
          />
          <Input
            label="Phone (with country code)"
            type="tel"
            value={data.phone}
            onChange={handleChange('phone')}
            placeholder="+1 555 123 4567"
            required
          />
        </div>

        {/* Location & Demographics */}
        <div className="grid md:grid-cols-3 gap-4">
          <Input
            label="Country"
            value={data.country}
            onChange={handleChange('country')}
            placeholder="Where you live"
            required
          />
          <Input
            label="Age"
            type="number"
            value={data.age}
            onChange={handleChange('age')}
            placeholder="Your age"
            min="18"
            max="100"
            required
          />
          <div>
            <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
              Pronouns
            </label>
            <select
              value={data.pronouns}
              onChange={handleChange('pronouns')}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] bg-white focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors"
            >
              <option value="">Select...</option>
              <option value="she/her">She/Her</option>
              <option value="he/him">He/Him</option>
              <option value="they/them">They/Them</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
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
        <Button onClick={handleNext} disabled={!isStepComplete(2)}>
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
