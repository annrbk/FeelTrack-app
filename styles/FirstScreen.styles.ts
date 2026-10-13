import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      padding: scale(24),
      justifyContent: "center",
    },
    content: {
      gap: scale(12),
    },
    title: {
      fontSize: scale(20),
      ...typography.semiBold,
      color: colors.textPrimary,
      textAlign: "center",
    },
    description: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textSecondary,
      textAlign: "center",
    },
    button: {
      backgroundColor: colors.btnPrimary,
      paddingVertical: scale(12),
      paddingHorizontal: scale(20),
      borderRadius: scale(8),
      marginBottom: scale(12),
    },
    buttonPressed: {
      backgroundColor: colors.btnActive,
    },
    buttonText: {
      color: colors.white,
      fontSize: scale(16),
      ...typography.medium,
      textAlign: "center",
    },
  });
