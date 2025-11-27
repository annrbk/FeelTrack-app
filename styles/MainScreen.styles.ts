import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 48,
  },
  description: {
    padding: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: "#555",
    textAlign: "center",
  },
  emotionTitle: {
    fontSize: 20,
    textAlign: "center",
    padding: 12,
  },
  emotionsContainer: {},
  emotions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  emotionButton: {
    width: 80,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    margin: 6,
  },
  emotionActiveButton: {
    width: 80,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: "#cee4fbff",
    borderColor: "#2e86de",
    borderWidth: 1,
    margin: 6,
  },
  emoji: {
    fontSize: 40,
  },
  emotionLabel: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
  },
});
