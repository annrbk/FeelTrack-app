import { SignInValues } from "../types/signInValuesType";
import { useState } from "react";
import { loginUser } from "../services/loginService";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const login = async (values: SignInValues) => {
    try {
      const user = await loginUser(values);
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return { login, error };
};
