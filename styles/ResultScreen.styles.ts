import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  score: {
    fontSize: 16,
    color: "#1f2937",
    marginBottom: 12,
  },
  interpretationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 6,
  },
  interpretationText: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2e86de",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});
