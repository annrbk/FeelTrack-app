import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    headerCard: {
      marginTop: 8,
      marginBottom: 10,
      paddingHorizontal: 4,
      paddingVertical: 6,
      backgroundColor: "transparent",
      borderWidth: 0,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    headerTitle: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    headerAction: {
      fontSize: 14,
      ...typography.medium,
      color: colors.btnPrimary,
    },
    avatarCard: {
      marginHorizontal: 12,
      marginBottom: 14,
      paddingVertical: 20,
      alignItems: "center",
      borderRadius: 16,
      backgroundColor: colors.surfacePrimary,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    avatarContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
      backgroundColor: "#d9dbde",
    },
    addIcon: {
      position: "absolute",
      right: -2,
      bottom: -2,
      backgroundColor: colors.white,
      borderRadius: 18,
      padding: 5,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    formCard: {
      marginHorizontal: 12,
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
      fontSize: 14,
      marginBottom: 6,
      ...typography.medium,
      color: colors.textPrimary,
    },
    input: {
      width: "100%",
      height: 48,
      borderColor: colors.borderPrimary,
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 14,
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
      backgroundColor: colors.backgroundColorPrimary,
      opacity: 0.55,
    },
    editInput: {
      opacity: 1,
    },
    saveContainer: {
      marginHorizontal: 12,
      marginTop: 14,
      marginBottom: 16,
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
      color: colors.white,
      fontSize: 16,
    },
  });
