import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  warningContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fae7e7",
    borderRadius: 8,
  },
  warningText: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    marginTop: 48,
    backgroundColor: "#2e86de",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
