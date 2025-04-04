import { useState, useCallback } from 'react';

type ValidationRule = (value: any) => string | undefined;
type ValidationRules = { [key: string]: ValidationRule[] };

interface FormState {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const useForm = <T extends FormState>(
  initialState: T,
  validationRules?: ValidationRules
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = useCallback(
    (name: string, value: any) => {
      if (!validationRules || !validationRules[name]) {
        return undefined;
      }

      for (const rule of validationRules[name]) {
        const error = rule(value);
        if (error) {
          return error;
        }
      }

      return undefined;
    },
    [validationRules]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));

      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const validateForm = useCallback(() => {
    if (!validationRules) {
      return true;
    }

    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField, validationRules]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
  }, [initialState]);

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setFormData
  };
};

export default useForm; 