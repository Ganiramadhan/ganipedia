import type { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-xl shadow-slate-200/50',
  bordered: 'bg-white border border-slate-200',
};

export const Card: FC<CardProps> = ({
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        rounded-2xl p-6
        ${variantStyles[variant]}
        ${hover ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader: FC<CardHeaderProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Content
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent: FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Card Footer
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter: FC<CardFooterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`mt-6 pt-4 border-t border-slate-100 ${className}`} {...props}>
      {children}
    </div>
  );
};
