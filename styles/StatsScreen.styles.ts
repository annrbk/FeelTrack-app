import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 24,
      paddingTop: 50,
      backgroundColor: colors.backgroundColorPrimary,
      alignItems: "stretch",
    },
    dayContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      margin: 8,
    },
    dayText: {
      fontSize: 14,
      ...typography.regular,
      color: colors.textPrimary,
      marginBottom: 2,
    },
    emotionContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundColorPrimary,
      borderRadius: 6,
      width: 36,
      height: 32,
    },
    title: {
      fontSize: 22,
      ...typography.medium,
      marginHorizontal: 16,
      marginBottom: 6,
      marginTop: 20,
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
      marginHorizontal: 16,
      marginBottom: 24,
    },
    emotionText: {
      fontSize: 10,
      marginLeft: 2,
      color: colors.textPrimary,
    },
    emotionTextSmile: {
      fontSize: 10,
      color: colors.textPrimary,
    },
    calendarStyle: {
      height: 470,
      marginHorizontal: 16,
      borderRadius: 16,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      backgroundColor: colors.surfacePrimary,
    },
  });
