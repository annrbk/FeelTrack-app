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
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
  },
  button: {
    backgroundColor: "#2e86de",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  avatarContainer: {
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  avatars: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarActive: {
    borderWidth: 2,
    borderColor: "#2e86de",
    borderRadius: 40,
  },
  avatarButton: {
    borderRadius: 40,
  },
});
