import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: scale(24),
      paddingVertical: scale(12),
      backgroundColor: colors.backgroundColorPrimary,
    },
    formContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    keyboardView: {
      flex: 1,
      width: "100%",
    },
    scrollContent: {
      flexGrow: 1,
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: scale(12),
      paddingVertical: scale(14),
      gap: scale(4),
    },
    footerText: {
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.textPrimary,
      ...typography.regular,
    },
    title: {
      fontSize: scale(28),
      ...typography.semiBold,
      marginBottom: scale(16),
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: scale(16),
      marginBottom: scale(32),
      color: colors.textSecondary,
      textAlign: "center",
      ...typography.regular,
    },
    input: {
      width: "100%",
      height: scale(48),
      borderColor: colors.borderPrimary,
      borderWidth: 1,
      borderRadius: scale(8),
      paddingHorizontal: scale(16),
      marginBottom: scale(12),
      fontSize: scale(16),
      color: colors.textPrimary,
      ...typography.regular,
    },
    inputError: {
      borderColor: colors.btnWarning,
    },
    error: {
      color: colors.btnWarning,
      marginBottom: scale(4),
      alignSelf: "flex-start",
      fontSize: scale(14),
      ...typography.regular,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    eyeIcon: {
      position: "absolute",
      right: scale(16),
      bottom: scale(24),
      zIndex: 1,
    },
    buttonContainer: {
      width: "100%",
    },
    button: {
      backgroundColor: colors.btnPrimary,
      paddingVertical: scale(12),
      paddingHorizontal: scale(20),
      borderRadius: scale(8),
      marginBottom: scale(12),
      alignItems: "center",
    },
    buttonPressed: {
      backgroundColor: colors.btnActive,
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    buttonText: {
      color: colors.white,
      fontSize: scale(16),
      ...typography.medium,
    },
    consentText: {
      marginTop: scale(4),
      marginBottom: scale(12),
      color: colors.textSecondary,
      fontSize: scale(12),
      lineHeight: scale(18),
      textAlign: "center",
      ...typography.regular,
    },
    consentLink: {
      color: colors.btnActive,
      ...typography.bold,
    },
    footerButton: {
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.btnActive,
      ...typography.bold,
    },
    forgotPassword: {
      color: colors.btnActive,
      ...typography.bold,
    },
  });
