import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  settingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backButton: {
    borderRadius: 8,
    width: 48,
  },
  rightPart: { width: 48 },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  settingTitleContainer: { flex: 1, alignItems: "center" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
