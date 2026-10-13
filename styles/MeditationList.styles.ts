import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

export const getStyles = (colors: AppThemeColors, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
    },
    backButtonContainer: {
      paddingHorizontal: scale(16),
      paddingTop: scale(16),
    },
    header: {
      flexDirection: "row",
      padding: scale(12),
      alignItems: "center",
      backgroundColor: colors.bgCalm,
      borderRadius: scale(12),
      marginHorizontal: scale(14),
      marginTop: scale(8),
    },
    imageContainer: {
      marginRight: scale(16),
    },
    image: {
      width: scale(100),
      height: scale(100),
      borderRadius: scale(12),
    },
    headerTextContainer: {
      flex: 1,
      justifyContent: "center",
    },
    headerTitle: {
      fontSize: scale(28),
      ...typography.medium,
      color: colors.textPrimary,
    },
    headerSubtitle: {
      fontSize: scale(16),
      ...typography.regular,
      color: isDark ? colors.textPrimary : colors.textSecondary,
      marginTop: scale(4),
    },
    listContainer: {
      paddingHorizontal: scale(16),
      paddingTop: scale(16),
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.backgroundColorPrimary,
      padding: scale(12),
      marginBottom: scale(8),
      borderRadius: scale(10),
      borderWidth: 0.5,
      borderColor: colors.dividerPrimary,
    },
    trackNumber: {
      width: scale(30),
      fontSize: scale(14),
      ...typography.medium,
      color: colors.textSecondary,
    },
    trackInfo: {
      flex: 1,
      marginLeft: scale(12),
    },
    trackTitle: {
      fontSize: scale(16),
      ...typography.medium,
      color: colors.textPrimary,
      marginBottom: scale(2),
    },
    trackAlbum: {
      fontSize: scale(13),
      ...typography.regular,
      color: colors.textSecondary,
    },
    trackDuration: {
      fontSize: scale(13),
      ...typography.regular,
      color: colors.textSecondary,
      marginLeft: scale(12),
    },
  });
