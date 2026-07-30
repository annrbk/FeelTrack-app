import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "@env";
import type { RootStackParamList } from "../navigation/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_DELAY = 60;

export const useForgotPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const timeout = setTimeout(() => setResendTimer((p) => p - 1), 1000);
    return () => clearTimeout(timeout);
  }, [resendTimer]);

  const requestCode = async () => {
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      Alert.alert(t("common.error"), t("forgotPassword.errors.invalidEmail"));
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`${API_URL}/api/auth/forgot-password`, {
        email: trimmedEmail,
      });
      setCode("");
      setNewPassword("");
      setConfirmPassword("");
      setResendTimer(RESEND_DELAY);
      setStep(2);
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? t("common.somethingWentWrong"))
        : t("common.somethingWentWrong");
      Alert.alert(t("common.error"), message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async () => {
    const trimmedCode = code.trim();
    const trimmedPassword = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();
    if (!trimmedCode || !trimmedPassword || !trimmedConfirm) {
      Alert.alert(t("common.error"), t("forgotPassword.errors.emptyFields"));
      return;
    }
    if (trimmedPassword.length < 6) {
      Alert.alert(
        t("common.error"),
        t("forgotPassword.errors.passwordTooShort"),
      );
      return;
    }
    if (trimmedPassword !== trimmedConfirm) {
      Alert.alert(
        t("common.error"),
        t("forgotPassword.errors.passwordsDoNotMatch"),
      );
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`${API_URL}/api/auth/reset-password`, {
        email: email.trim().toLowerCase(),
        code: trimmedCode,
        newPassword: trimmedPassword,
      });
      Alert.alert(
        t("forgotPassword.successTitle"),
        t("forgotPassword.successMessage"),
        [{ text: "OK", onPress: () => navigation.navigate("SignIn") }],
      );
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? t("common.somethingWentWrong"))
        : t("common.somethingWentWrong");
      Alert.alert(t("common.error"), message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    step,
    email,
    setEmail,
    code,
    setCode,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    resendTimer,
    requestCode,
    resetPassword,
  };
};
