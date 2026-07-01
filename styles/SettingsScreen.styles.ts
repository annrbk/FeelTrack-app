import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.backgroundColorPrimary,
    },
    settingHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      paddingBottom: 10,
    },
    headerTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    backButton: {
      borderRadius: 8,
      width: 48,
    },
    rightPart: { width: 24 },
    settingTitleContainer: {
      flex: 1,
      alignItems: "center",
    },
    mainSettingContainer: {
      gap: 12,
      marginBottom: 14,
    },
    passwordContainer: {
      padding: 12,
      backgroundColor: colors.surfacePrimary,
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    buttonArrowRight: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    themeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
      backgroundColor: colors.surfacePrimary,
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    settingTitle: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
    },
    settingItem: {
      marginTop: 14,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      backgroundColor: colors.surfacePrimary,
    },
    settingText: {
      fontSize: 16,
      ...typography.regular,
      color: colors.btnWarning,
    },
  });
