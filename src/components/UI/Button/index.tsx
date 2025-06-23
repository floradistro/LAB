import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'medium', 
    fullWidth = false,
    href,
    loading = false,
    disabled,
    className = '',
    ...props 
  }, ref) => {
    const baseClasses = variant === 'primary' ? 'apple-button' : 'apple-button-secondary';
    
    const sizeClasses = {
      small: 'px-4 py-2 text-xs',
      medium: 'px-6 py-3 text-sm',
      large: 'px-8 py-4 text-base'
    };

    const classes = `
      ${baseClasses} 
      ${sizeClasses[size]} 
      ${fullWidth ? 'w-full' : ''} 
      ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `.trim();

    if (loading) {
      const content = (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      );
      
      if (href) {
        return <span className={classes}>{content}</span>;
      }
      
      return (
        <button ref={ref} className={classes} disabled {...props}>
          {content}
        </button>
      );
    }

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 