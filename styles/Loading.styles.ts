import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";
import { typography } from "./typography";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.backgroundColorPrimary,
    },
    text: {
      marginTop: 12,
      color: colors.textPrimary,
      ...typography.regular,
      fontSize: 16,
    },
  });
