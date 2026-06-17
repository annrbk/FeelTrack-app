import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24, 28, 24, 0.25)",
  },
  modalView: {
    width: 260,
    margin: 20,
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 24,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  buttonClose: {
    backgroundColor: ThemeColors.btnPrimary,
  },
  textStyle: {
    color: ThemeColors.white,
    ...typography.semiBold,
    textAlign: "center",
    width: 100,
    fontSize: 15,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color: ThemeColors.textPrimary,
    ...typography.regular,
    fontSize: 15,
    lineHeight: 21,
  },
  emoji: {
    fontSize: 46,
    marginBottom: 20,
  },
});
