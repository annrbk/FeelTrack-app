import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: scale(24),
      paddingVertical: scale(16),
      backgroundColor: colors.backgroundColorPrimary,
    },
    title: {
      fontSize: scale(28),
      ...typography.semiBold,
      marginBottom: scale(16),
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: scale(16),
      ...typography.regular,
      marginBottom: scale(32),
      color: colors.textSecondary,
      textAlign: "center",
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
