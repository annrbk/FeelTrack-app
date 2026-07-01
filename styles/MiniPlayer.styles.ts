import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      left: 0,
      right: 0,
      height: 70,
      backgroundColor: colors.backgroundColorPrimary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderTopWidth: 0.5,
      borderTopColor: colors.borderPrimary,
    },
    leftSection: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    textContainer: {
      flex: 1,
      marginRight: 48,
      marginLeft: 10,
    },
    title: {
      fontSize: 14,
      ...typography.medium,
      color: colors.textPrimary,
      marginBottom: 2,
    },
    subtitle: {
      fontSize: 12,
      ...typography.regular,
      color: colors.textSecondary,
    },
    miniCover: {
      width: 50,
      height: 50,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.2,
      borderColor: colors.dividerPrimary,
    },
    playButton: {
      padding: 4,
      marginLeft: 8,
    },
    progressBarContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: colors.borderPrimary,
    },
    progressBar: {
      position: "absolute",
      height: "100%",
    },
  });
