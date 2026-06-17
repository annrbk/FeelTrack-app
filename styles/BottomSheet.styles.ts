import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sheet: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 2,
    overflow: "hidden",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(82, 110, 99, 0.18)",
  },
});
