import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: scale(16),
      backgroundColor: colors.backgroundColorPrimary,
    },
    passwordHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: scale(16),
      paddingBottom: scale(10),
    },
    passwordTitleContainer: {
      flex: 1,
      alignItems: "center",
    },
    headerTitle: {
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    rightPart: {
      width: scale(24),
    },
    formCard: {
      paddingHorizontal: scale(14),
      paddingTop: scale(14),
      paddingBottom: scale(8),
      borderRadius: scale(16),
      backgroundColor: colors.surfacePrimary,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    field: {
      marginBottom: scale(12),
    },
    inputLabel: {
      marginBottom: scale(6),
      fontSize: scale(14),
      ...typography.medium,
      color: colors.textPrimary,
    },
    input: {
      width: "100%",
      height: scale(48),
      borderRadius: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      paddingHorizontal: scale(14),
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
      backgroundColor: isDark ? colors.backgroundColorPrimary : "#ffffff",
      opacity: 0.55,
    },
    eyeIcon: {
      position: "absolute",
      right: scale(16),
      bottom: scale(13),
      zIndex: 1,
    },
    editInput: {
      opacity: 1,
    },
    buttonContainer: {
      marginTop: scale(14),
      paddingHorizontal: 0,
    },
    button: {
      backgroundColor: colors.btnPrimary,
      borderRadius: scale(10),
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: scale(12),
    },
    buttonText: {
      ...typography.regular,
      color: "#ffffff",
      fontSize: scale(15),
    },
    buttonDisabled: {
      opacity: 0.5,
    },
  });
