import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(82, 110, 99, 0.18)",
  },
  modalView: {
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    backgroundColor: ThemeColors.backgroundColorPrimary,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  text: {
    textAlign: "center",
    color: ThemeColors.textPrimary,
    ...typography.regular,
    fontSize: 15,
  },
  button: {
    backgroundColor: ThemeColors.btnPrimary,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: "center",
  },
  buttonText: {
    color: ThemeColors.white,
    ...typography.semiBold,
    textAlign: "center",
    fontSize: 15,
  },
});
