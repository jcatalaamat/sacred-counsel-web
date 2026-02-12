'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--color-charcoal)]"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            'flex w-full rounded-lg border border-[var(--color-sand-dark)] bg-white px-4 py-3',
            'text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-sand)]',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-[var(--color-charcoal-light)]">{helperText}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

// Textarea Component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[var(--color-charcoal)]"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'flex w-full rounded-lg border border-[var(--color-sand-dark)] bg-white px-4 py-3',
            'text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60',
            'transition-all duration-200 resize-y min-h-[120px]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-sand)]',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-[var(--color-charcoal-light)]">{helperText}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// Select Component
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-[var(--color-charcoal)]"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            'flex w-full rounded-lg border border-[var(--color-sand-dark)] bg-white px-4 py-3',
            'text-[var(--color-charcoal)]',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-sand)]',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-[var(--color-charcoal-light)]">{helperText}</p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Input, Textarea, Select };
