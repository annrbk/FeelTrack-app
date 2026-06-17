import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: ThemeColors.backgroundColorPrimary,
  },
  passwordHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingBottom: 10,
  },
  passwordTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
  },
  rightPart: {
    width: 24,
  },
  formCard: {
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
    marginBottom: 6,
    fontSize: 14,
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
  buttonContainer: {
    marginTop: 14,
    paddingHorizontal: 0,
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
