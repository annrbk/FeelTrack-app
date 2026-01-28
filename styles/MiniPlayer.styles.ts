import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#ffffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },

  textContainer: {
    flex: 1,
    marginRight: 48,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 12,
    color: "#757575",
  },

  playButton: {
    padding: 4,
    marginLeft: 8,
  },

  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#838383ff",
  },

  progressBar: {
    position: "absolute",
    height: "100%",
    backgroundColor: "#2e86de",
  },
});
