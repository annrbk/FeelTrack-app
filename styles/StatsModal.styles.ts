import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(70, 70, 70, 0.3)",
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emotionView: {
    flexWrap: "wrap",
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
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 12,
    gap: 24,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2e86de",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
