import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: scale(16),
      backgroundColor: colors.backgroundColorPrimary,
    },
    section: {
      flex: 1,
      paddingVertical: scale(16),
    },
    grid: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "space-evenly",
      paddingHorizontal: scale(8),
    },
    title: {
      fontSize: scale(22),
      ...typography.medium,
      color: colors.textPrimary,
      marginHorizontal: scale(16),
    },
    subtitle: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
      marginHorizontal: scale(16),
      marginBottom: scale(8),
    },
    imageWrapper: {
      width: "98%",
      justifyContent: "center",
      borderRadius: scale(12),
      marginBottom: scale(16),
    },
    iconContainer: {
      padding: scale(8),
    },
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: scale(4),
      margin: scale(4),
      gap: scale(4),
      marginLeft: scale(8),
    },
    informContainer: {
      flexDirection: "column",
    },
    imageTitle: {
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    sessionText: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
    },
  });
