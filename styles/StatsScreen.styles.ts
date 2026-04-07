import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    margin: 8,
  },
  emotionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9f2fe",
    borderRadius: 6,
    width: 36,
    height: 32,
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
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    padding: 6,
    gap: 8,
  },
  monthText: {
    fontSize: 18,
  },
  emotionText: {
    fontSize: 10,
    marginLeft: 2,
  },
  emotionTextSmile: {
    fontSize: 10,
  },
  calendarStyle: {
    height: 380,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
});
