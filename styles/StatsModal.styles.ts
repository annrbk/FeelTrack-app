import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(82, 110, 99, 0.18)",
    },
    modalView: {
      width: 280,
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      backgroundColor: colors.backgroundColorPrimary,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 18,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    text: {
      textAlign: "center",
      color: colors.textPrimary,
      ...typography.regular,
      fontSize: 15,
    },
    button: {
      backgroundColor: colors.btnPrimary,
      width: 160,
      height: 44,
      borderRadius: 14,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonPressed: {
      backgroundColor: colors.btnActive,
    },
    buttonText: {
      color: colors.white,
      ...typography.regular,
      textAlign: "center",
      fontSize: 15,
    },
  });
