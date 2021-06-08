import { useState } from "react";

interface UseFormParams<T> {
  initialValues?: T;
  onSubmit?: (values: T) => void;
}

export const useForm = <T,>(params: UseFormParams<T>) => {
  const { initialValues, onSubmit } = params;
  const [values, setValues] = useState<T>(initialValues);

  return {
    values,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSubmit(values);
    },

    handleChange: (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;

      setValues((currentValues) => ({
        ...currentValues,
        [name]: value,
      }));
    },
  };
};
