import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  instruction: {
    fontSize: 16,
    marginVertical: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 8,
  },
  questionCounterContainer: {
    backgroundColor: "#2e86de",
    padding: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  questionCounter: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  optionButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  optionButtonClicked: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#2e86de",
    borderRadius: 8,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  previousButton: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  nextButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#2e86de",
    borderRadius: 8,
  },
  disabledButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
});
