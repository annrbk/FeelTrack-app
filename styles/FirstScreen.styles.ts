import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      padding: 24,
      justifyContent: "center",
    },
    content: {
      gap: 12,
    },
    title: {
      fontSize: 20,
      ...typography.semiBold,
      color: colors.textPrimary,
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textSecondary,
      textAlign: "center",
    },
    button: {
      backgroundColor: colors.btnPrimary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 12,
    },
    buttonPressed: {
      backgroundColor: colors.btnActive,
    },
    buttonText: {
      color: colors.white,
      fontSize: 16,
      ...typography.medium,
      textAlign: "center",
    },
  });
