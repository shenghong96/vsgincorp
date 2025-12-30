
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  // Fix: Added React import to define the React namespace for type definitions
  icon: React.ReactNode;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}