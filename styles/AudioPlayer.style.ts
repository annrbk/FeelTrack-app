import { StyleSheet, Dimensions } from "react-native";
import { typography } from "./typography";
import { AppThemeColors } from "../types/themeType";
import { scale } from "../utils/responsive";

const { width } = Dimensions.get("window");

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColorPrimary,
      width: "100%",
      maxWidth: 560,
      alignSelf: "center",
      paddingHorizontal: scale(24),
      paddingTop: 0,
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: scale(32),
      marginTop: scale(16),
    },
    topHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: scale(24),
    },
    nowPlayingText: {
      fontSize: scale(18),
      ...typography.medium,
      color: colors.textPrimary,
    },
    closeButton: {
      width: scale(40),
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
    },
    rightPart: {
      width: scale(40),
    },
    coverContainer: {
      width: Math.min(width * 0.8, scale(360)),
      height: Math.min(width * 0.8, scale(360)),
      borderRadius: scale(16),
      marginBottom: scale(24),
      marginTop: scale(16),
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.textSecondary,
      elevation: 6,
    },
    trackTitle: {
      fontSize: scale(24),
      ...typography.medium,
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: scale(6),
    },
    trackCategory: {
      fontSize: scale(15),
      ...typography.regular,
      color: colors.textSecondary,
      textAlign: "center",
    },
    progressContainer: {
      width: "100%",
      height: scale(44),
    },
    progressLabelContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: scale(4),
      marginTop: scale(8),
    },
    progressLabelText: {
      fontSize: scale(12),
      ...typography.regular,
      color: colors.textSecondary,
    },
    musicControls: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: scale(4),
      marginTop: scale(18),
    },
    controlButton: {
      width: scale(46),
      height: scale(46),
      borderRadius: scale(23),
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
      width: scale(68),
      height: scale(68),
      borderRadius: scale(34),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.btnPlayer,
      elevation: 5,
    },
  });
