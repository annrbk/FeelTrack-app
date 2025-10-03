import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 20,
    color: "#222",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 16,
    marginBottom: 24,
  },
  monthContainer: {
    marginBottom: 12,
    padding: 6,
  },
  monthText: {
    fontSize: 18,
  },
  calendarStyle: {
    height: 380,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
});
