import { useState, useCallback } from 'react';

type ValidationRule = (value: any) => string | undefined;
type ValidationRules = { [key: string]: ValidationRule[] };

interface FormConfig<T> {
  initialValues: T;
  validationRules?: ValidationRules;
  onSubmit: (values: T) => void | Promise<void>;
}

interface FormState<T> {
  values: T;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  isSubmitting: boolean;
  isValid: boolean;
}

export const useForm = <T extends { [key: string]: any }>({
  initialValues,
  validationRules = {},
  onSubmit
}: FormConfig<T>) => {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: true
  });

  const validateField = useCallback(
    (name: keyof T, value: any): string | undefined => {
      const rules = validationRules[name as string];
      if (!rules) return undefined;

      for (const rule of rules) {
        const error = rule(value);
        if (error) return error;
      }

      return undefined;
    },
    [validationRules]
  );

  const validateForm = useCallback((): boolean => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(state.values).forEach((key) => {
      const error = validateField(key as keyof T, state.values[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setState((prev) => ({
      ...prev,
      errors,
      isValid
    }));

    return isValid;
  }, [state.values, validateField]);

  const handleChange = useCallback(
    (name: keyof T, value: any) => {
      setState((prev) => {
        const newValues = { ...prev.values, [name]: value };
        const error = validateField(name, value);

        return {
          ...prev,
          values: newValues,
          errors: {
            ...prev.errors,
            [name]: error || ''
          },
          touched: {
            ...prev.touched,
            [name]: true
          }
        };
      });
    },
    [validateField]
  );

  const handleBlur = useCallback((name: keyof T) => {
    setState((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true
      }
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event?: React.FormEvent) => {
      if (event) {
        event.preventDefault();
      }

      if (!validateForm()) {
        return;
      }

      setState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        await onSubmit(state.values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [state.values, validateForm, onSubmit]
  );

  const resetForm = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: true
    });
  }, [initialValues]);

  const setFieldValue = useCallback((name: keyof T, value: any) => {
    handleChange(name, value);
  }, [handleChange]);

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: error
      }
    }));
  }, []);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: state.isSubmitting,
    isValid: state.isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError,
    validateForm
  };
}; 