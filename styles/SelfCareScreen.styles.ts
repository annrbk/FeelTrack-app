import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: "stretch",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 32,
    paddingVertical: 16,
  },
  list: {
    paddingHorizontal: 10,
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
    marginHorizontal: 8,
  },
  image: {
    width: width * 0.7,
    height: 200,
    borderRadius: 12,
  },
});
