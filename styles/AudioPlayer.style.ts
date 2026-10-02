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
      shadowColor: colors.textSecondary,
      elevation: 8,
    },
    trackTitle: {
      fontSize: 24,
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
      height: 44,
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
      paddingHorizontal: 4,
      marginTop: 18,
    },
    controlButton: {
      width: 46,
      height: 46,
      borderRadius: 23,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundColorPrimary,
      borderWidth: 0.8,
      borderColor: colors.btnPlayer,
    },
    controlButtonActive: {
      backgroundColor: colors.btnPlayer,
      borderColor: colors.btnPlayer,
    },
    mainControlButton: {
      width: 68,
      height: 68,
      borderRadius: 34,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.btnPlayer,
      elevation: 5,
    },
  });
