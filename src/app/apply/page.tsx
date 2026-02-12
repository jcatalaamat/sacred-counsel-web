'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ApplicationProvider,
  useApplication,
  ProgressBar,
  Step1Service,
  Step2About,
  Step3Health,
  Step4Intentions,
  Step5Schedule,
} from '@/components/application';

function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const { updateData } = useApplication();

  // Handle query params for pre-selection
  useEffect(() => {
    const service = searchParams.get('service');
    if (service && ['ayahuasca', 'homestay', 'integration', 'detox'].includes(service)) {
      updateData({ service: service as 'ayahuasca' | 'homestay' | 'integration' | 'detox' });
    }
  }, [searchParams, updateData]);

  return null;
}

function ApplicationContent() {
  const { currentStep } = useApplication();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Service />;
      case 2:
        return <Step2About />;
      case 3:
        return <Step3Health />;
      case 4:
        return <Step4Intentions />;
      case 5:
        return <Step5Schedule />;
      default:
        return <Step1Service />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-sand)]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-sand-dark)]">
        <ProgressBar />
      </div>

      {/* Content */}
      <div className="container py-12">
        {renderStep()}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <ApplicationProvider>
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>
      <ApplicationContent />
    </ApplicationProvider>
  );
}
