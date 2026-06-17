import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: ThemeColors.backgroundColorPrimary,
  },
  settingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
  },
  backButton: {
    borderRadius: 8,
    width: 48,
  },
  rightPart: { width: 24 },
  settingTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  mainSettingContainer: {
    gap: 12,
    marginBottom: 14,
  },
  passwordContainer: {
    padding: 12,
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  buttonArrowRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  settingTitle: {
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
  settingItem: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    backgroundColor: ThemeColors.surfacePrimary,
    ...shadow,
  },
  settingText: {
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.btnWarning,
  },
});
