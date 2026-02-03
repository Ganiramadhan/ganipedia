import type { FC, ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'default' | 'gray' | 'gradient';
}

const variantStyles = {
  default: 'bg-white',
  gray: 'bg-slate-50',
  gradient: 'bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 text-white',
};

export const Section: FC<SectionProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <section
      className={`py-16 md:py-24 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

// Section Header
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            light
              ? 'bg-white/10 text-white'
              : 'bg-primary-100 text-primary-700'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
