import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    headerTitle: {
      ...typography.semiBold,
      fontSize: 18,
      color: colors.textPrimary,
    },
    rightPart: {
      width: 40,
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      padding: 16,
      paddingBottom: 24,
    },
    card: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    subtitle: {
      ...typography.semiBold,
      fontSize: 18,
      color: colors.textPrimary,
      marginBottom: 8,
    },
    paragraph: {
      ...typography.regular,
      fontSize: 14,
      lineHeight: 20,
      color: colors.textSecondary,
      marginBottom: 8,
    },
    sectionTitle: {
      ...typography.semiBold,
      fontSize: 16,
      color: colors.textPrimary,
      marginBottom: 12,
    },
    featureItem: {
      marginBottom: 8,
    },
    featureName: {
      ...typography.medium,
      fontSize: 14,
      color: colors.textPrimary,
      marginBottom: 2,
    },
    featureDesc: {
      ...typography.regular,
      fontSize: 13,
      lineHeight: 18,
      color: colors.textSecondary,
    },
    footer: {
      alignItems: "center",
      marginTop: 8,
      paddingHorizontal: 16,
    },
    thankYouText: {
      ...typography.medium,
      fontSize: 14,
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: 8,
    },
    versionText: {
      ...typography.regular,
      fontSize: 12,
      color: colors.textSecondary,
      marginBottom: 2,
    },
  });
