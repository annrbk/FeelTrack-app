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
    },
    section: {
      flex: 1,
      paddingVertical: 16,
    },
    grid: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "space-evenly",
      paddingHorizontal: 8,
    },
    title: {
      fontSize: 28,
      ...typography.medium,
      color: colors.textPrimary,
      marginHorizontal: 16,
    },
    subtitle: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
      marginHorizontal: 16,
      marginBottom: 8,
    },
    imageWrapper: {
      width: "98%",
      justifyContent: "center",
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginBottom: 16,
    },
    iconContainer: {
      padding: 8,
    },
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 4,
      margin: 4,
      gap: 4,
      marginLeft: 8,
    },
    informContainer: {
      flexDirection: "column",
    },
    imageTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    sessionText: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
    },
  });
