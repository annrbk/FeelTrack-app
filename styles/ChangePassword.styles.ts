import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.backgroundColorPrimary,
    },
    passwordHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      paddingBottom: 10,
    },
    passwordTitleContainer: {
      flex: 1,
      alignItems: "center",
    },
    headerTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    rightPart: {
      width: 24,
    },
    formCard: {
      paddingHorizontal: 14,
      paddingTop: 14,
      paddingBottom: 8,
      borderRadius: 16,
      backgroundColor: colors.surfacePrimary,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    field: {
      marginBottom: 12,
    },
    inputLabel: {
      marginBottom: 6,
      fontSize: 14,
      ...typography.medium,
      color: colors.textPrimary,
    },
    input: {
      width: "100%",
      height: 48,
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      paddingHorizontal: 14,
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
      backgroundColor: isDark ? colors.backgroundColorPrimary : "#ffffff",
      opacity: 0.55,
    },
    editInput: {
      opacity: 1,
    },
    buttonContainer: {
      marginTop: 14,
      paddingHorizontal: 0,
    },
    button: {
      backgroundColor: colors.btnPrimary,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
    },
    buttonText: {
      ...typography.regular,
      color: "#ffffff",
      fontSize: 15,
    },
  });
