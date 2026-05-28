import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(70, 70, 70, 0.3)",
  },
  modalView: {
    width: 250,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000ff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color: "#1a1a1a",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
  },
  cancelText: {
    color: "#1a1a1a",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#e74c3c",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
