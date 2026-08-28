import { SignInValues } from "../types/signInValuesType";
import { useState } from "react";
import { loginUser } from "../services/loginService";
import { useSession } from "../ctx";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useSession();

  const login = async (values: SignInValues) => {
    try {
      const user = await loginUser(values);
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error);
      }
    }
  };

  const loginSubmit = async (values: SignInValues) => {
    try {
      setError(null);
      await signIn(values);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { login, loginSubmit, error, setError, showPassword, setShowPassword };
};
