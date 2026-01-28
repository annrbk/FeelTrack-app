import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffffff",
    paddingHorizontal: 24,
    paddingTop: 100,
  },

  headerContainer: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 24,
  },

  closeButton: {
    marginTop: 16,
  },

  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },

  trackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 8,
  },

  trackCategory: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },

  progressContainer: {
    width: "100%",
    height: 32,
  },

  progressLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: 8,
  },

  progressLabelText: {
    fontSize: 12,
    color: "#999",
  },

  musicControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
  },
});
