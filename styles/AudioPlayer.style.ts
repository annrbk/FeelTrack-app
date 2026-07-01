import { StyleSheet, Dimensions } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";

const { width } = Dimensions.get("window");

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      paddingHorizontal: 24,
      paddingTop: 24,
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: 32,
      marginTop: 24,
    },
    topHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 24,
    },
    nowPlayingText: {
      fontSize: 18,
      ...typography.medium,
      color: colors.textPrimary,
    },
    closeButton: {
      width: 40,
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
    },
    rightPart: {
      width: 40,
    },
    coverContainer: {
      width: width * 0.8,
      height: width * 0.8,
      borderRadius: 16,
      marginBottom: 24,
      marginTop: 16,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.2,
      borderColor: colors.dividerPrimary,
    },
    trackTitle: {
      fontSize: 22,
      ...typography.medium,
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: 6,
    },
    trackCategory: {
      fontSize: 15,
      ...typography.regular,
      color: colors.textSecondary,
      textAlign: "center",
    },
    progressContainer: {
      width: "100%",
      height: 32,
    },
    progressLabelContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 4,
      marginTop: 8,
    },
    progressLabelText: {
      fontSize: 12,
      ...typography.regular,
      color: colors.textSecondary,
    },
    musicControls: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 12,
      marginTop: 18,
    },
  });
