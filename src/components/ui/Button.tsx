'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Loader2 } from 'lucide-react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  disabled?: boolean;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-medium tracking-wide
  rounded-lg
  transition-all duration-300 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  transform hover:scale-[1.02] active:scale-[0.98]
`;

const variants = {
  primary: `
    bg-[var(--color-forest)] text-white
    hover:bg-[var(--color-forest-dark)]
    focus-visible:ring-[var(--color-forest)]
    shadow-md hover:shadow-lg
  `,
  secondary: `
    bg-[var(--color-earth)] text-white
    hover:bg-[var(--color-earth-dark)]
    focus-visible:ring-[var(--color-earth)]
    shadow-md hover:shadow-lg
  `,
  outline: `
    border-2 border-[var(--color-forest)] text-[var(--color-forest)]
    hover:bg-[var(--color-forest)] hover:text-white
    focus-visible:ring-[var(--color-forest)]
  `,
  ghost: `
    text-[var(--color-forest)]
    hover:bg-[var(--color-sage-light)]
    focus-visible:ring-[var(--color-forest)]
  `,
  accent: `
    bg-[var(--color-gold)] text-[var(--color-charcoal)]
    hover:bg-[var(--color-gold-dark)]
    focus-visible:ring-[var(--color-gold)]
    shadow-md hover:shadow-lg
  `,
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      ...rest
    } = props;

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    // If href is provided, render as Link
    if ('href' in props && props.href) {
      const { disabled, href, ...linkRest } = rest as ButtonAsLink & { href: string };
      return (
        <Link
          href={props.href}
          className={cn(combinedClassName, disabled && 'opacity-50 pointer-events-none')}
          {...linkRest}
        >
          {content}
        </Link>
      );
    }

    // Otherwise render as button
    const { disabled, ...buttonRest } = rest as ButtonAsButton;
    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
