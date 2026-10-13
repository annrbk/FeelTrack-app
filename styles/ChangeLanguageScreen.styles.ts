import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      paddingVertical: scale(16),
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: scale(24),
      paddingHorizontal: scale(16),
    },
    headerTitle: {
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    mainContainer: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(16),
      padding: scale(16),
      marginHorizontal: scale(16),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      gap: scale(10),
    },
    languageButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: scale(14),
      paddingHorizontal: scale(16),
      borderRadius: scale(12),
      backgroundColor: colors.backgroundColorPrimary,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    languageButtonActive: {
      borderColor: colors.textPrimary,
      borderWidth: 0.5,
    },
    languageText: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
    },
    languageTextActive: {
      ...typography.medium,
    },
  });
