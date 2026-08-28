import { registerUser } from "../services/registerService";
import type { SignUpValues } from "../types/signUpValuesType";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

export const useRegister = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const submitForm = async (values: SignUpValues) => {
    try {
      const newUser = await register(values);
      if (newUser) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    register,
    submitForm,
    error,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};
