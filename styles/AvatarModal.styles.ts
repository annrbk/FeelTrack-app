import { StyleSheet } from "react-native";
import { ThemeColors } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(82, 110, 99, 0.16)",
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
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalText: {
    color: ThemeColors.textPrimary,
    ...typography.semiBold,
    fontSize: 16,
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
  avatarContainer: {
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  avatars: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
  avatarActive: {
    borderWidth: 1,
    borderColor: ThemeColors.btnPrimary,
    borderRadius: 37,
    padding: 2,
  },
  avatarButton: {
    borderRadius: 37,
    padding: 2,
  },
});
