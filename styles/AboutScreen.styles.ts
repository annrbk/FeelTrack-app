import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";
import { scale } from "../utils/responsive";

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
      width: "100%",
      maxWidth: 560,
      alignSelf: "center",
      paddingHorizontal: scale(16),
      paddingVertical: scale(12),
    },
    headerTitle: {
      ...typography.semiBold,
      fontSize: scale(18),
      color: colors.textPrimary,
    },
    rightPart: {
      width: scale(40),
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      width: "100%",
      maxWidth: 560,
      alignSelf: "center",
      padding: scale(16),
      paddingBottom: scale(24),
    },
    card: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(16),
      padding: scale(16),
      marginBottom: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    subtitle: {
      ...typography.semiBold,
      fontSize: scale(18),
      color: colors.textPrimary,
      marginBottom: scale(8),
    },
    paragraph: {
      ...typography.regular,
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.textSecondary,
      marginBottom: scale(8),
    },
    sectionTitle: {
      ...typography.semiBold,
      fontSize: scale(16),
      color: colors.textPrimary,
      marginBottom: scale(12),
    },
    featureItem: {
      marginBottom: scale(8),
    },
    featureName: {
      ...typography.medium,
      fontSize: scale(14),
      color: colors.textPrimary,
      marginBottom: scale(2),
    },
    featureDesc: {
      ...typography.regular,
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.textSecondary,
    },
    footer: {
      alignItems: "center",
      marginTop: scale(8),
      paddingHorizontal: scale(16),
    },
    thankYouText: {
      ...typography.medium,
      fontSize: scale(14),
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: scale(8),
    },
    versionText: {
      ...typography.regular,
      fontSize: scale(12),
      color: colors.textSecondary,
      marginBottom: scale(2),
    },
  });
