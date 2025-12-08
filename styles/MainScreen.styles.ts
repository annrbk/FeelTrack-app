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
    color: "#555",
    textAlign: "center",
  },
  statisticsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  statistics: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: "#363636ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statisticsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 16,
  },
  statisticsContent: {
    gap: 8,
  },
  currentEmotion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: "#f5f2f2ff",
  },
  currentEmotionEmoji: {
    fontSize: 26,
  },
  currentEmotionLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  timeContainer: {
    justifyContent: "flex-end",
    flex: 1,
    paddingRight: 8,
  },
  currentEmotionTime: {
    textAlign: "right",
    fontSize: 14,
    marginLeft: 48,
    color: "#6B7280",
  },
  statisticsEmpty: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
