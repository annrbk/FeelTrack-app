import { StyleSheet } from "react-native";
import { shadow, ThemeColors } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: ThemeColors.backgroundColorPrimary },
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
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 16,
    marginHorizontal: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
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
    backgroundColor: "#d9dbde",
  },
  name: {
    fontSize: 20,
    ...typography.semiBold,
    color: "#3d403b",
    marginBottom: 2,
  },
  email: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.textPrimary,
    marginTop: 2,
  },
  settingsContainer: {
    paddingTop: 8,
    marginHorizontal: 12,
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 16,
    paddingHorizontal: 4,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  settingItem: {
    paddingVertical: 14,
    paddingLeft: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: ThemeColors.dividerPrimary,
  },
  settingItemLast: {
    paddingVertical: 14,
    paddingLeft: 12,
  },
  settingText: {
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
});
