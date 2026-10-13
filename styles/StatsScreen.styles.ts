import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      alignItems: "stretch",
    },
    dayContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: scale(30),
      height: scale(30),
      margin: scale(8),
    },
    dayText: {
      fontSize: scale(14),
      ...typography.regular,
      color: colors.textPrimary,
      marginBottom: scale(2),
    },
    emotionContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundColorPrimary,
      borderRadius: scale(6),
      width: scale(36),
      height: scale(32),
    },
    title: {
      fontSize: scale(22),
      ...typography.medium,
      marginHorizontal: scale(16),
      marginBottom: scale(6),
      marginTop: scale(20),
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
      marginHorizontal: scale(16),
      marginBottom: scale(24),
    },
    emotionText: {
      fontSize: scale(10),
      marginLeft: scale(2),
      color: colors.textPrimary,
    },
    emotionTextSmile: {
      fontSize: scale(10),
      color: colors.textPrimary,
    },
    calendarStyle: {
      height: scale(470),
      marginHorizontal: scale(16),
      borderRadius: scale(16),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      backgroundColor: colors.surfacePrimary,
    },
  });
