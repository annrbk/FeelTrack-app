import { StyleSheet } from "react-native";
import { shadow, ThemeColors } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundColorPrimary,
  },
  headerCard: {
    marginTop: 8,
    marginBottom: 10,
    paddingHorizontal: 4,
    paddingVertical: 6,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 17,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
  },
  headerAction: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
  avatarCard: {
    marginHorizontal: 12,
    marginBottom: 14,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: ThemeColors.surfacePrimary,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#d9dbde",
  },
  addIcon: {
    position: "absolute",
    right: -2,
    bottom: -2,
    backgroundColor: ThemeColors.white,
    borderRadius: 18,
    padding: 5,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
  },
  formCard: {
    marginHorizontal: 12,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 8,
    borderRadius: 16,
    backgroundColor: ThemeColors.surfacePrimary,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  field: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 6,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: ThemeColors.dividerPrimary,
    borderWidth: 0.8,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.textPrimary,
    backgroundColor: ThemeColors.white,
    opacity: 0.55,
  },
  editInput: {
    opacity: 1,
  },
  saveContainer: {
    marginHorizontal: 12,
    marginTop: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: ThemeColors.btnPrimary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  buttonText: {
    ...typography.semiBold,
    color: ThemeColors.white,
    fontSize: 15,
  },
});
