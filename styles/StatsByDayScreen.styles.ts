import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: scale(16),
      paddingVertical: scale(16),
      backgroundColor: colors.backgroundColorPrimary,
      zIndex: 10,
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
    scrollContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    scrollContent: {
      paddingVertical: scale(12),
      paddingBottom: scale(32),
    },
    mainContainer: {
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(16),
      padding: scale(16),
      marginHorizontal: scale(16),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    statisticsHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: scale(14),
    },
    statisticsTitle: {
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    emotionList: {
      gap: scale(8),
      width: "100%",
    },
    emotionRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: scale(8),
      paddingHorizontal: scale(8),
      borderRadius: scale(10),
      backgroundColor: colors.backgroundColorPrimary,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    emotionEmoji: {
      fontSize: scale(24),
    },
    emotionLabel: {
      fontSize: scale(15),
      ...typography.regular,
      marginLeft: scale(8),
      color: colors.textPrimary,
    },
    timeContainer: {
      justifyContent: "flex-end",
      flex: 1,
      paddingRight: scale(4),
    },
    emotionTime: {
      textAlign: "right",
      fontSize: scale(13),
      ...typography.regular,
      color: colors.textPrimary,
      opacity: 0.75,
    },
  });
