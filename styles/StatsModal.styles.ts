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
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
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
