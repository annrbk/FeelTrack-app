import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
  },
  calendarInput: {
    position: "relative",
  },
  calendarInputIcon: {
    position: "absolute",
    right: 16,
    top: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
});
