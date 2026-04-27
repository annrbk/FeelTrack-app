import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#474747ff",
    shadowOffset: { width: 0, height: 1 },
  },
  trackNumber: {
    width: 30,
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
  trackInfo: {
    flex: 1,
    marginLeft: 12,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 2,
  },
  trackAlbum: {
    fontSize: 13,
    color: "#666",
  },
  trackDuration: {
    fontSize: 14,
    color: "#999",
    marginLeft: 12,
  },
});
