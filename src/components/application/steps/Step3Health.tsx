'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { useApplication } from '../ApplicationContext';
import { Button } from '@/components/ui/Button';

export function Step3Health() {
  const { data, updateData, setCurrentStep, isStepComplete } = useApplication();

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    updateData({ [field]: e.target.value });
  };

  const handleNext = () => {
    if (isStepComplete(3)) {
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--color-charcoal)] mb-4">
          Health & Experience
        </h1>
        <p className="text-lg text-[var(--color-charcoal-light)]">
          This information helps us ensure your safety and create the best experience
        </p>
      </motion.div>

      {/* Safety Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--color-sage-light)]/30 border border-[var(--color-sage)] rounded-xl p-4 mb-6 flex items-start gap-3"
      >
        <AlertCircle className="w-5 h-5 text-[var(--color-forest)] mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[var(--color-charcoal)]">
          Your responses are confidential. We ask these questions to ensure your safety
          and determine if our offerings are appropriate for you. Some health conditions
          and medications are contraindicated with plant medicine.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-sand-dark)] space-y-6"
      >
        {/* Previous Experience */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Previous experience with psychedelics or plant medicine *
          </label>
          <select
            value={data.previousExperience}
            onChange={handleChange('previousExperience')}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] bg-white focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors"
            required
          >
            <option value="">Select your experience level...</option>
            <option value="none">No previous experience</option>
            <option value="some-psychedelics">Some experience with psychedelics (psilocybin, LSD, etc.)</option>
            <option value="ayahuasca-once">1-2 ayahuasca ceremonies</option>
            <option value="ayahuasca-several">3-10 ayahuasca ceremonies</option>
            <option value="ayahuasca-many">10+ ayahuasca ceremonies</option>
            <option value="extensive">Extensive experience with various plant medicines</option>
          </select>
        </div>

        {/* Medications */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Current medications *
          </label>
          <textarea
            value={data.medications}
            onChange={handleChange('medications')}
            placeholder="List all current medications, supplements, and herbs you take regularly. If none, write 'None'."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[100px] resize-y"
            required
          />
        </div>

        {/* Mental Health */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Mental health history
          </label>
          <textarea
            value={data.mentalHealthHistory}
            onChange={handleChange('mentalHealthHistory')}
            placeholder="Please share any relevant mental health history, including diagnoses, hospitalizations, or ongoing treatment. This is confidential and helps us support you appropriately."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[100px] resize-y"
          />
        </div>

        {/* Physical Health */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Physical health & conditions *
          </label>
          <textarea
            value={data.physicalHealth}
            onChange={handleChange('physicalHealth')}
            placeholder="Please share any physical health conditions, allergies, or concerns (heart conditions, seizures, pregnancy, etc.). If none, write 'No significant conditions'."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[100px] resize-y"
            required
          />
        </div>

        {/* Dietary */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
            Dietary restrictions or preferences
          </label>
          <textarea
            value={data.dietaryRestrictions}
            onChange={handleChange('dietaryRestrictions')}
            placeholder="Vegetarian, vegan, allergies, intolerances, etc."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand-dark)] focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/20 outline-none transition-colors min-h-[80px] resize-y"
          />
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-between mt-8"
      >
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} disabled={!isStepComplete(3)}>
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
