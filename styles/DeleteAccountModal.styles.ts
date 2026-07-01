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
    closeIcon: {
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 1,
    },
    modalText: {
      marginBottom: 6,
      textAlign: "center",
      color: colors.textPrimary,
      ...typography.semiBold,
      fontSize: 16,
      lineHeight: 22,
    },
    modalSubText: {
      textAlign: "center",
      color: colors.textPrimary,
      ...typography.regular,
      fontSize: 16,
    },
    buttonsContainer: {
      flexDirection: "row",
      gap: 10,
      marginTop: 6,
    },
    cancelButton: {
      borderRadius: 14,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.surfacePrimary,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    cancelText: {
      color: colors.textPrimary,
      ...typography.regular,
      textAlign: "center",
      fontSize: 16,
    },
    deleteButton: {
      borderRadius: 14,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.btnWarning,
    },
    deleteText: {
      color: colors.white,
      ...typography.regular,
      textAlign: "center",
      fontSize: 16,
    },
  });
