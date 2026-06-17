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
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalText: {
    marginBottom: 6,
    textAlign: "center",
    color: ThemeColors.textPrimary,
    ...typography.semiBold,
    fontSize: 16,
    lineHeight: 22,
  },
  modalSubText: {
    textAlign: "center",
    color: ThemeColors.textPrimary,
    ...typography.regular,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  cancelButton: {
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: ThemeColors.surfacePrimary,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
  },
  cancelText: {
    color: ThemeColors.textPrimary,
    ...typography.semiBold,
    textAlign: "center",
    fontSize: 14,
  },
  deleteButton: {
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: ThemeColors.btnWarning,
  },
  deleteText: {
    color: ThemeColors.white,
    ...typography.semiBold,
    textAlign: "center",
    fontSize: 14,
  },
});
