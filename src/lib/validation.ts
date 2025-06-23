// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (US format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Generic field validation
export const validateField = (value: string, type: 'email' | 'phone' | 'required'): string | null => {
  if (!value && type === 'required') {
    return 'This field is required';
  }
  
  if (value && type === 'email' && !isValidEmail(value)) {
    return 'Please enter a valid email address';
  }
  
  if (value && type === 'phone' && !isValidPhone(value)) {
    return 'Please enter a valid phone number';
  }
  
  return null;
};

// Form validation
export interface ValidationRule {
  type: 'email' | 'phone' | 'required';
  message?: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule[];
}

export const validateForm = (
  data: Record<string, unknown>, 
  schema: ValidationSchema
): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.keys(schema).forEach(field => {
    const rules = schema[field];
    const value = String(data[field] || '');
    
    for (const rule of rules) {
      const error = validateField(value, rule.type);
      if (error) {
        errors[field] = rule.message || error;
        break;
      }
    }
  });
  
  return errors;
}; 