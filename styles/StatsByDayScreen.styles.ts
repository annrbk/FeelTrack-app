import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingVertical: 48,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContainer: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f1f1",
    borderRadius: 12,
    padding: 8,
    marginHorizontal: 12,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 16,
    backgroundColor: "#d9f2fe",
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emotionView: {
    width: "100%",
  },
  emotionLabel: {
    paddingVertical: 6,
    fontSize: 16,
  },
  emotionTime: {
    fontSize: 14,
    color: "#a3a3a3",
  },
  emotionEmoji: {
    fontSize: 24,
  },
  itemsContainer: {
    gap: 24,
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 12,
    gap: 24,
  },
});
