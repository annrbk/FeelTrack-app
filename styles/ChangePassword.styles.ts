import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  passwordHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  rightPart: { width: 48 },
  passwordTitleContainer: { flex: 1, alignItems: "center" },
  inputLabel: { marginBottom: 4 },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    opacity: 0.5,
  },
  editInput: { opacity: 1 },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#2e86de",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});
