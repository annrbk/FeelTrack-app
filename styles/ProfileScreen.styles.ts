import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: colors.backgroundColorPrimary },
    container: {
      flexGrow: 1,
      paddingTop: scale(20),
      paddingBottom: scale(18),
      alignItems: "stretch",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: scale(24),
      paddingHorizontal: scale(16),
      paddingVertical: scale(20),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(16),
      marginHorizontal: scale(12),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    avatar: {
      width: scale(72),
      height: scale(72),
      borderRadius: scale(36),
      marginRight: scale(16),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    avatarPlaceholder: {
      width: scale(72),
      height: scale(72),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: scale(36),
      marginRight: scale(16),
      backgroundColor: colors.white,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    name: {
      fontSize: scale(20),
      ...typography.regular,
      color: colors.textPrimary,
      marginBottom: scale(2),
    },
    email: {
      fontSize: scale(14),
      ...typography.regular,
      color: colors.textPrimary,
      marginTop: scale(2),
    },
    settingsContainer: {
      paddingTop: scale(8),
      marginHorizontal: scale(12),
      backgroundColor: colors.surfacePrimary,
      borderRadius: scale(16),
      paddingHorizontal: scale(4),
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
    },
    settingItem: {
      paddingVertical: scale(14),
      paddingLeft: scale(12),
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderPrimary,
    },
    settingItemLast: {
      paddingVertical: scale(14),
      paddingLeft: scale(12),
    },
    settingText: {
      fontSize: scale(16),
      ...typography.regular,
      color: colors.textPrimary,
    },
  });
