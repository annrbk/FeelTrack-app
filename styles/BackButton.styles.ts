import { StyleSheet } from "react-native";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    buttonContainer: {
      zIndex: 1,
    },
    backButton: {},
  });
