import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(24, 28, 24, 0.25)",
    },
    modalView: {
      width: 280,
      margin: 20,
      backgroundColor: colors.surfacePrimary,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 18,
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    closeIcon: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    button: {
      minWidth: 160,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      paddingVertical: 10,
      paddingHorizontal: 24,
    },
    buttonPressed: {
      backgroundColor: colors.btnActive,
    },
    buttonClose: {
      backgroundColor: colors.btnPrimary,
    },
    textStyle: {
      color: colors.white,
      ...typography.regular,
      textAlign: "center",
      fontSize: 16,
      flexShrink: 0,
    },
    accentText: {
      color: colors.btnPrimary,
      ...typography.medium,
      fontSize: 16,
    },
    modalText: {
      marginBottom: 20,
      textAlign: "center",
      color: colors.textPrimary,
      ...typography.regular,
      fontSize: 16,
    },
    emoji: {
      fontSize: 46,
      marginBottom: 20,
    },
  });
