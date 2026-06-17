import { StyleSheet } from "react-native";
import { ThemeColors } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: ThemeColors.backgroundColorPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: ThemeColors.borderPrimary,
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: ThemeColors.dividerPrimary,
  },

  textContainer: {
    flex: 1,
    marginRight: 48,
    marginLeft: 10,
  },

  title: {
    fontSize: 14,
    ...typography.medium,
    color: ThemeColors.textPrimary,
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 12,
    ...typography.regular,
    color: ThemeColors.textSecondary,
  },

  playButton: {
    padding: 4,
    marginLeft: 8,
  },

  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: ThemeColors.borderPrimary,
  },

  progressBar: {
    position: "absolute",
    height: "100%",
    backgroundColor: ThemeColors.btnPrimary,
  },
});
