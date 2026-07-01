import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    input: {
      width: "100%",
      height: 48,
      borderColor: colors.borderPrimary,
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingRight: 48,
      marginBottom: 12,
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
      backgroundColor: colors.backgroundColorPrimary,
    },
    calendarInput: {
      position: "relative",
    },
    calendarInputIcon: {
      position: "absolute",
      right: 14,
      top: 12,
      color: colors.btnPrimary,
    },
    disabled: {
      opacity: 0.5,
    },
    active: {
      opacity: 1,
    },
  });
