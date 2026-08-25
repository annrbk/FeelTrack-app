import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import type { RootStackParamList } from "../navigation/types";
import {
  requestPasswordReset,
  confirmPasswordReset,
} from "../services/forgotPasswordService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_DELAY = 60;

export const useForgotPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

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

  const requestCode = async (email: string) => {
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      Alert.alert(t("common.error"), t("forgotPassword.errors.invalidEmail"));
      return;
    }
    setIsLoading(true);
    try {
      await requestPasswordReset(trimmedEmail);
      setResendTimer(RESEND_DELAY);
      navigation.navigate("VerifyCode", { email: trimmedEmail });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : t("common.somethingWentWrong");
      Alert.alert(t("common.error"), message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = (email: string, code: string) => {
    const trimmedCode = code.trim();
    if (!trimmedCode) {
      Alert.alert(t("common.error"), t("forgotPassword.errors.emptyField"));
      return;
    }
    navigation.navigate("ResetPassword", { email, code: trimmedCode });
  };

  const resetPassword = async (email: string, trimmedCode: string) => {
    const trimmedPassword = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();
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
      await confirmPasswordReset(
        email.trim().toLowerCase(),
        trimmedCode,
        trimmedPassword,
      );
      Alert.alert(
        t("forgotPassword.successTitle"),
        t("forgotPassword.successMessage"),
        [{ text: "OK", onPress: () => navigation.navigate("SignIn") }],
      );
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : t("common.somethingWentWrong");
      Alert.alert(t("common.error"), message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
    verifyCode,
  };
};
