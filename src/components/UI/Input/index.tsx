import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helpText, 
    fullWidth = true,
    className = '', 
    id,
    required,
    ...props 
  }, ref) => {
    // Generate an ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseClasses = 'border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all';
    const errorClasses = error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300';
    const sizeClasses = 'px-3 py-2.5 md:py-2 text-sm md:text-xs';
    const widthClasses = fullWidth ? 'w-full' : '';
    
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={`${baseClasses} ${errorClasses} ${sizeClasses} ${widthClasses} ${className}`.trim()}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
          {...props}
        />
        
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600" role="alert">
            {error}
          </p>
        )}
        
        {helpText && !error && (
          <p id={`${inputId}-help`} className="mt-1 text-xs text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 