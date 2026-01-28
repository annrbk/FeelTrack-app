import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sheet: {
    width: "100%",
    position: "absolute",
    bottom: 82,
    zIndex: 2,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
});
