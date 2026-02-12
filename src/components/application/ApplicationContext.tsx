'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ApplicationData {
  // Step 1: Service Selection
  service: 'ayahuasca' | 'homestay' | 'integration' | 'detox' | '';
  retreatDate?: string;

  // Step 2: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  age: string;
  pronouns: string;

  // Step 3: Experience & Health
  previousExperience: string;
  medications: string;
  mentalHealthHistory: string;
  physicalHealth: string;
  dietaryRestrictions: string;

  // Step 4: Intentions
  intentions: string;
  expectations: string;
  concerns: string;
  hearAboutUs: string;

  // Step 5: Schedule
  preferredDate?: string;
  preferredTime?: string;
  timezone: string;
  additionalNotes: string;
}

const initialData: ApplicationData = {
  service: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  age: '',
  pronouns: '',
  previousExperience: '',
  medications: '',
  mentalHealthHistory: '',
  physicalHealth: '',
  dietaryRestrictions: '',
  intentions: '',
  expectations: '',
  concerns: '',
  hearAboutUs: '',
  timezone: '',
  additionalNotes: '',
};

interface ApplicationContextType {
  data: ApplicationData;
  updateData: (updates: Partial<ApplicationData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
  isStepComplete: (step: number) => boolean;
  resetForm: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

const STORAGE_KEY = 'sacred-counsel-application';

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ApplicationData>(initialData);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed.data || initialData);
        setCurrentStep(parsed.currentStep || 1);
      } catch {
        // Invalid data, use defaults
      }
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, currentStep }));
  }, [data, currentStep]);

  const updateData = (updates: Partial<ApplicationData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const resetForm = () => {
    setData(initialData);
    setCurrentStep(1);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!data.service;
      case 2:
        return !!(
          data.firstName &&
          data.lastName &&
          data.email &&
          data.phone &&
          data.country &&
          data.age
        );
      case 3:
        return !!(
          data.previousExperience &&
          data.medications &&
          data.physicalHealth
        );
      case 4:
        return !!(data.intentions && data.expectations);
      case 5:
        return !!(data.timezone);
      default:
        return false;
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        data,
        updateData,
        currentStep,
        setCurrentStep,
        totalSteps,
        isStepComplete,
        resetForm,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
}
