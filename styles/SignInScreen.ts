import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: colors.backgroundColorPrimary,
    },
    formContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      paddingVertical: 14,
      gap: 4,
    },
    title: {
      fontSize: 28,
      ...typography.semiBold,
      marginBottom: 16,
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 32,
      color: colors.textSecondary,
      textAlign: "center",
      ...typography.regular,
    },
    input: {
      width: "100%",
      height: 48,
      borderColor: colors.borderPrimary,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 12,
      fontSize: 16,
      color: colors.textPrimary,
      ...typography.regular,
    },
    inputError: {
      borderColor: colors.btnWarning,
    },
    error: {
      color: colors.btnWarning,
      marginBottom: 4,
      alignSelf: "flex-start",
      fontSize: 14,
      ...typography.regular,
    },
    buttonContainer: {
      width: "100%",
    },
    button: {
      backgroundColor: colors.btnPrimary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 12,
      alignItems: "center",
    },
    buttonText: {
      color: colors.white,
      fontSize: 16,
      ...typography.medium,
    },
    footerButton: {
      color: colors.btnActive,
      ...typography.bold,
    },
    forgotPassword: {
      color: colors.btnActive,
      ...typography.bold,
    },
  });
