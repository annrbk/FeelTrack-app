import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
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
    },
    statisticsHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 14,
    },
    statisticsTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    emotionList: {
      gap: 8,
      width: "100%",
    },
    emotionRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 10,
      backgroundColor: colors.backgroundColorPrimary,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    emotionEmoji: {
      fontSize: 24,
    },
    emotionLabel: {
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
    emotionTime: {
      textAlign: "right",
      fontSize: 13,
      ...typography.regular,
      color: colors.textPrimary,
      opacity: 0.75,
    },
  });
