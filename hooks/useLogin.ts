import { SignInValues } from "../types/signInValuesType";
import { useRef, useState } from "react";
import { loginUser } from "../services/loginService";
import { useSession } from "../ctx";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);

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
    if (submissionInProgress.current) return;
    submissionInProgress.current = true;
    setIsSubmitting(true);
    try {
      setError(null);
      await signIn(values);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };
  return {
    login,
    loginSubmit,
    error,
    setError,
    showPassword,
    setShowPassword,
    isSubmitting,
  };
};
