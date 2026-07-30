import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: colors.backgroundColorPrimary,
      zIndex: 10,
    },
    headerTitle: {
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    keyboardView: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
    },
    mainCard: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: 16,
      padding: 20,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    description: {
      fontSize: 14,
      ...typography.regular,
      color: colors.textSecondary,
      marginBottom: 20,
      lineHeight: 20,
    },
    input: {
      height: 48,
      backgroundColor: colors.backgroundColorPrimary,
      borderRadius: 10,
      paddingHorizontal: 14,
      fontSize: 15,
      ...typography.regular,
      color: colors.textPrimary,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
      marginBottom: 14,
    },
    button: {
      height: 48,
      backgroundColor: colors.btnPrimary,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
    },
    buttonText: {
      fontSize: 16,
      ...typography.medium,
      color: colors.surfacePrimary,
    },
    resendButton: {
      marginTop: 18,
      alignItems: "center",
      paddingVertical: 4,
    },
    resendText: {
      fontSize: 13,
      ...typography.regular,
      color: colors.textSecondary,
      textDecorationLine: "underline",
    },
    resendTextDisabled: {
      textDecorationLine: "none",
      opacity: 0.6,
    },
  });
