import { StyleSheet } from "react-native";
import { ThemeColors } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderColor: ThemeColors.dividerPrimary,
    borderWidth: 0.8,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingRight: 48,
    marginBottom: 12,
    fontSize: 16,
    color: ThemeColors.textPrimary,
    backgroundColor: ThemeColors.white,
    ...typography.regular,
  },
  calendarInput: {
    position: "relative",
  },
  calendarInputIcon: {
    position: "absolute",
    right: 14,
    top: 12,
    color: ThemeColors.btnPrimary,
  },
  disabled: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
});
