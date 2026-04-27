import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: "stretch",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  section: {
    flex: 1,
    paddingVertical: 16,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-evenly",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  imageWrapper: {
    width: "46%",
    margin: "2%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  imageTitleContainer: {
    position: "absolute",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    top: 10,
    left: 10,
  },
  sessionContainer: {
    position: "absolute",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    bottom: 10,
    right: 10,
  },
  imageTitle: {
    fontSize: 16,
  },
});
