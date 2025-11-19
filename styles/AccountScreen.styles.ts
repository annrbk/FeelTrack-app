import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#877f7fff",
  },
  formContainer: {
    padding: 24,
  },
  inputLabel: {
    marginBottom: 4,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    opacity: 0.5,
  },
  editInput: {
    opacity: 1,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#2e86de",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});
