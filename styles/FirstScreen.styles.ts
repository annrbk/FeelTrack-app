import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#283b70ff",
    marginBottom: 24,
    textAlign: "center",
  },
  content: {
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#c7d2fe",
  },
  buttonText: {
    color: "#283b70ff",
    fontWeight: "600",
    fontSize: 16,
  },
});
