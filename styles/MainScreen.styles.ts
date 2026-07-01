import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { moderateScale } from "react-native-size-matters";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: colors.backgroundColorPrimary,
    },
    scrollContent: {
      paddingBottom: 24,
    },
    description: {
      paddingTop: 54,
      paddingBottom: 18,
      paddingHorizontal: 12,
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      ...typography.medium,
      textAlign: "center",
      color: colors.textPrimary,
      paddingHorizontal: 16,
      paddingVertical: 6,
    },
    subtitle: {
      fontSize: 16,
      ...typography.regular,
      textAlign: "center",
      color: colors.textPrimary,
      borderWidth: 0.5,
      borderColor: colors.btnPrimary,
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 7,
    },
    accentText: {
      color: colors.btnPrimary,
      fontSize: 16,
      ...typography.medium,
      letterSpacing: 0.5,
    },
    emotionsContainer: {
      marginTop: 20,
    },
    emotionTitle: {
      fontSize: 18,
      ...typography.medium,
      textAlign: "center",
      color: colors.textPrimary,
    },
    emotions: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    emotionButton: {
      width: 70,
      alignItems: "center",
      paddingVertical: 10,
      margin: 4,
    },
    emotionActiveButton: {
      width: 70,
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 14,
      margin: 4,
      borderWidth: 0.5,
      borderColor: colors.btnPrimary,
    },
    emoji: {
      fontSize: 32,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    emotionLabel: {
      marginTop: 4,
      fontSize: 13,
      ...typography.regular,
      color: colors.textPrimary,
    },
    statistics: {
      width: "100%",
      borderRadius: 16,
      padding: 16,
      marginTop: 18,
      backgroundColor: colors.surfacePrimary,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    statisticsHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
      borderStartColor: colors.surfacePrimary,
    },
    navIconButton: {
      width: 28,
      height: 28,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.7,
      borderColor: colors.btnPrimary,
      backgroundColor: "transparent",
    },
    statisticsTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    statisticsContent: {
      gap: 8,
    },
    currentEmotion: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 10,
      backgroundColor: isDark ? colors.backgroundColorPrimary : "#ffffff",
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    currentEmotionEmoji: {
      fontSize: 24,
    },
    currentEmotionLabel: {
      fontSize: 15,
      ...typography.regular,
      marginLeft: 8,
      color: colors.textPrimary,
    },
    timeContainer: {
      justifyContent: "flex-end",
      flex: 1,
      paddingRight: 4,
    },
    currentEmotionTime: {
      textAlign: "right",
      fontSize: 13,
      ...typography.regular,
      color: colors.textPrimary,
      opacity: 0.75,
    },
    statisticsEmpty: {
      alignItems: "center",
      paddingVertical: 8,
      gap: 10,
    },
    emptyTitle: {
      fontSize: 15,
      ...typography.regular,
      textAlign: "center",
      color: colors.textPrimary,
    },
    emptySubtitle: {
      fontSize: 14,
      ...typography.regular,
      textAlign: "center",
      color: colors.textPrimary,
      opacity: 0.8,
    },
    deleteButton: {
      height: moderateScale(48),
      alignItems: "center",
      justifyContent: "center",
      width: moderateScale(64),
      backgroundColor: colors.btnWarning,
      borderRadius: 10,
    },
    deleteButtonText: {
      color: "#ffffff",
      ...typography.regular,
    },
  });
