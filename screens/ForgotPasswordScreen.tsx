import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";
import { getStyles } from "../styles/ForgotPasswordScreen.styles";
import { useTranslation } from "react-i18next";
import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPasswordScreen() {
  const { styles, colors } = useAppStyle(getStyles);
  const { t } = useTranslation();
  const {
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
  } = useForgotPassword();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>
          {step === 1
            ? t("forgotPassword.headerStep1")
            : t("forgotPassword.headerStep2")}
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.mainCard}>
            {step === 1 ? (
              <>
                <Text style={styles.description}>
                  {t("forgotPassword.step1Description")}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={t("forgotPassword.emailPlaceholder")}
                  placeholderTextColor={colors.textSecondary}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={requestCode}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={colors.btnPrimary} />
                  ) : (
                    <Text style={styles.buttonText}>
                      {t("forgotPassword.sendCodeButton")}
                    </Text>
                  )}
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.description}>
                  {t("forgotPassword.step2Description", {
                    email: email.trim(),
                  })}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={t("forgotPassword.codePlaceholder")}
                  placeholderTextColor={colors.textSecondary}
                  value={code}
                  onChangeText={setCode}
                  keyboardType="number-pad"
                  maxLength={6}
                />
                <TextInput
                  style={styles.input}
                  placeholder={t("forgotPassword.newPasswordPlaceholder")}
                  placeholderTextColor={colors.textSecondary}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                />
                <TextInput
                  style={styles.input}
                  placeholder={t("forgotPassword.confirmPasswordPlaceholder")}
                  placeholderTextColor={colors.textSecondary}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={resetPassword}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={colors.btnPrimary} />
                  ) : (
                    <Text style={styles.buttonText}>
                      {t("forgotPassword.resetButton")}
                    </Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.resendButton}
                  onPress={requestCode}
                  disabled={resendTimer > 0 || isLoading}
                >
                  <Text
                    style={[
                      styles.resendText,
                      resendTimer > 0 && styles.resendTextDisabled,
                    ]}
                  >
                    {resendTimer > 0
                      ? t("forgotPassword.resendCodeIn", {
                          seconds: resendTimer,
                        })
                      : t("forgotPassword.resendCode")}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
