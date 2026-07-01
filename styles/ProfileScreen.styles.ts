import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: colors.backgroundColorPrimary },
    container: {
      flexGrow: 1,
      paddingVertical: 24,
      paddingTop: 50,
      alignItems: "stretch",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor: colors.surfacePrimary,
      borderRadius: 16,
      marginHorizontal: 12,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 36,
      marginRight: 16,
    },
    avatarPlaceholder: {
      width: 72,
      height: 72,
      borderRadius: 36,
      marginRight: 16,
      backgroundColor: colors.dividerPrimary,
    },
    name: {
      fontSize: 20,
      ...typography.regular,
      color: colors.textPrimary,
      marginBottom: 2,
    },
    email: {
      fontSize: 14,
      ...typography.regular,
      color: colors.textPrimary,
      marginTop: 2,
    },
    settingsContainer: {
      paddingTop: 8,
      marginHorizontal: 12,
      backgroundColor: colors.surfacePrimary,
      borderRadius: 16,
      paddingHorizontal: 4,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    settingItem: {
      paddingVertical: 14,
      paddingLeft: 12,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderPrimary,
    },
    settingItemLast: {
      paddingVertical: 14,
      paddingLeft: 12,
    },
    settingText: {
      fontSize: 16,
      ...typography.regular,
      color: colors.textPrimary,
    },
  });
