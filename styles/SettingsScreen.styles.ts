import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: scale(16),
      backgroundColor: colors.backgroundColorPrimary,
    },
    settingHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: scale(16),
      paddingBottom: scale(10),
    },
    headerTitle: {
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    backButton: {
      borderRadius: scale(8),
      width: scale(48),
    },
    rightPart: { width: scale(24) },
    settingTitleContainer: {
      flex: 1,
      alignItems: "center",
    },
    mainSettingContainer: {
      gap: scale(12),
      marginBottom: scale(14),
    },
    passwordContainer: {
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
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
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginBottom: scale(14),
    },
    languageContainer: {
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    privacyContainer: {
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginTop: scale(14),
    },
    termsContainer: {
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginTop: scale(14),
    },
    aboutContainer: {
      padding: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginTop: scale(14),
    },
    settingTitle: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
    },
    settingItem: {
      marginTop: scale(14),
      paddingVertical: scale(12),
      paddingHorizontal: scale(12),
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      backgroundColor: colors.surfacePrimary,
    },
    settingText: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.btnWarning,
    },
  });
