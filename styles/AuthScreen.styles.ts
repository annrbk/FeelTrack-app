import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: colors.backgroundColorPrimary,
    },
    title: {
      fontSize: 28,
      ...typography.semiBold,
      marginBottom: 16,
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: 16,
      ...typography.regular,
      marginBottom: 32,
      color: colors.textSecondary,
      textAlign: "center",
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
