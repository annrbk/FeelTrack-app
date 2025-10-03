import { registerUser } from "../services/registerService";
import type { SignUpValues } from "../types/signUpValuesType";
import { useState } from "react";

export const useRegister = () => {
  const [error, setError] = useState<string | null>(null);

  const register = async (values: SignUpValues) => {
    try {
      const newUser = await registerUser(values);
      return newUser;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return { register, error };
};
