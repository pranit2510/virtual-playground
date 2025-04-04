import { useState, useCallback } from 'react';

<<<<<<< HEAD
type ValidationRule = (value: any) => string | undefined;
type ValidationRules = { [key: string]: ValidationRule[] };

interface FormConfig<T> {
  initialValues: T;
  validationRules?: ValidationRules;
=======
type ValidationRule<T> = (value: T) => string | undefined;
type ValidationRules<T> = { [K in keyof T]?: ValidationRule<T[K]>[] };

interface FormConfig<T> {
  initialValues: T;
  validationRules?: ValidationRules<T>;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  onSubmit: (values: T) => void | Promise<void>;
}

interface FormState<T> {
  values: T;
<<<<<<< HEAD
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
=======
  errors: { [K in keyof T]?: string };
  touched: { [K in keyof T]?: boolean };
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  isSubmitting: boolean;
  isValid: boolean;
}

<<<<<<< HEAD
export const useForm = <T extends { [key: string]: any }>({
  initialValues,
  validationRules = {},
  onSubmit
=======
export const useForm = <T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit,
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
}: FormConfig<T>) => {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
<<<<<<< HEAD
    isValid: true
  });

  const validateField = useCallback(
    (name: keyof T, value: any): string | undefined => {
      const rules = validationRules[name as string];
=======
    isValid: true,
  });

  const validateField = useCallback(
    (name: keyof T, value: T[keyof T]): string | undefined => {
      const rules = validationRules[name];
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
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
<<<<<<< HEAD
    const errors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(state.values).forEach((key) => {
      const error = validateField(key as keyof T, state.values[key]);
      if (error) {
        errors[key] = error;
=======
    const errors: { [K in keyof T]?: string } = {};
    let isValid = true;

    Object.keys(state.values).forEach((key) => {
      const error = validateField(key as keyof T, state.values[key as keyof T]);
      if (error) {
        errors[key as keyof T] = error;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
        isValid = false;
      }
    });

    setState((prev) => ({
      ...prev,
      errors,
<<<<<<< HEAD
      isValid
=======
      isValid,
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
    }));

    return isValid;
  }, [state.values, validateField]);

  const handleChange = useCallback(
<<<<<<< HEAD
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
=======
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
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
        };
      });
    },
    [validateField]
  );

<<<<<<< HEAD
  const handleBlur = useCallback((name: keyof T) => {
=======
  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
    setState((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
<<<<<<< HEAD
        [name]: true
      }
=======
        [name]: true,
      },
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
    }));
  }, []);

  const handleSubmit = useCallback(
<<<<<<< HEAD
    async (event?: React.FormEvent) => {
      if (event) {
        event.preventDefault();
      }
=======
    async (event: React.FormEvent) => {
      event.preventDefault();
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

      if (!validateForm()) {
        return;
      }

      setState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        await onSubmit(state.values);
<<<<<<< HEAD
      } catch (error) {
        console.error('Form submission error:', error);
=======
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [state.values, validateForm, onSubmit]
  );

<<<<<<< HEAD
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
=======
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
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
<<<<<<< HEAD
        [name]: error
      }
=======
        [name]: error,
      },
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
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
<<<<<<< HEAD
    resetForm,
    setFieldValue,
    setFieldError,
    validateForm
=======
    setFieldValue,
    setFieldError,
    validateForm,
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  };
}; 