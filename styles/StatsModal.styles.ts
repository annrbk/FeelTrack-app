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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  emotionItem: {
    paddingVertical: 6,
    fontSize: 20,
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
