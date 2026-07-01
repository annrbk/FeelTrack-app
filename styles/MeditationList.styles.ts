import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    backButtonContainer: {
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    header: {
      flexDirection: "row",
      padding: 12,
      alignItems: "center",
      backgroundColor: colors.bgCalm,
      borderRadius: 12,
      marginHorizontal: 14,
      borderWidth: 0.5,
      borderColor: colors.borderPrimary,
      marginTop: 8,
    },
    imageContainer: {
      marginRight: 16,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 12,
    },
    headerTextContainer: {
      flex: 1,
      justifyContent: "center",
    },
    headerTitle: {
      fontSize: 28,
      ...typography.medium,
      color: colors.textPrimary,
    },
    headerSubtitle: {
      fontSize: 16,
      ...typography.regular,
      color: isDark ? colors.textPrimary : colors.textSecondary,
      marginTop: 4,
    },
    listContainer: {
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.backgroundColorPrimary,
      padding: 12,
      marginBottom: 8,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    trackNumber: {
      width: 30,
      fontSize: 14,
      ...typography.medium,
      color: colors.textSecondary,
    },
    trackInfo: {
      flex: 1,
      marginLeft: 12,
    },
    trackTitle: {
      fontSize: 16,
      ...typography.medium,
      color: colors.textPrimary,
      marginBottom: 2,
    },
    trackAlbum: {
      fontSize: 13,
      ...typography.regular,
      color: colors.textSecondary,
    },
    trackDuration: {
      fontSize: 13,
      ...typography.regular,
      color: colors.textSecondary,
      marginLeft: 12,
    },
  });
