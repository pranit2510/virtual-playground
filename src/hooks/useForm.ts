import { useState, useCallback } from 'react';

type ValidationRule<T> = (value: T) => string | undefined;
type ValidationRules<T> = { [K in keyof T]?: ValidationRule<T[K]>[] };

interface FormConfig<T> {
  initialValues: T;
  validationRules?: ValidationRules<T>;
  onSubmit: (values: T) => void | Promise<void>;
}

interface FormState<T> {
  values: T;
  errors: { [K in keyof T]?: string };
  touched: { [K in keyof T]?: boolean };
  isSubmitting: boolean;
  isValid: boolean;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit,
}: FormConfig<T>) => {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: true,
  });

  const validateField = useCallback(
    (name: keyof T, value: T[keyof T]): string | undefined => {
      const rules = validationRules[name];
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
    const errors: { [K in keyof T]?: string } = {};
    let isValid = true;

    Object.keys(state.values).forEach((key) => {
      const error = validateField(key as keyof T, state.values[key as keyof T]);
      if (error) {
        errors[key as keyof T] = error;
        isValid = false;
      }
    });

    setState((prev) => ({
      ...prev,
      errors,
      isValid,
    }));

    return isValid;
  }, [state.values, validateField]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setState((prev) => {
        const newValue = value as T[keyof T];
        const error = validateField(name as keyof T, newValue);
        return {
          ...prev,
          values: {
            ...prev.values,
            [name]: newValue,
          },
          errors: {
            ...prev.errors,
            [name]: error,
          },
          touched: {
            ...prev.touched,
            [name]: true,
          },
        };
      });
    },
    [validateField]
  );

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setState((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true,
      },
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      setState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        await onSubmit(state.values);
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [state.values, validateForm, onSubmit]
  );

  const setFieldValue = useCallback((name: keyof T, value: T[keyof T]) => {
    setState((prev) => {
      const error = validateField(name, value);
      return {
        ...prev,
        values: {
          ...prev.values,
          [name]: value,
        },
        errors: {
          ...prev.errors,
          [name]: error,
        },
        touched: {
          ...prev.touched,
          [name]: true,
        },
      };
    });
  }, [validateField]);

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: error,
      },
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
    setFieldValue,
    setFieldError,
    validateForm,
  };
}; 