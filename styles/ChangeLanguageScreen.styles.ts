import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      paddingVertical: 48,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
      paddingHorizontal: 16,
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
    mainContainer: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: 16,
      padding: 16,
      marginHorizontal: 16,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      gap: 10,
    },
    languageButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: colors.backgroundColorPrimary,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    languageButtonActive: {
      borderColor: colors.textPrimary,
      borderWidth: 0.5,
    },
    languageText: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
    },
    languageTextActive: {
      ...typography.medium,
    },
  });
