import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/SuccessModal.styles";
import type { showModalProps } from "../types/modalType";
import { useTheme } from "../context/ThemeContext";
import { ThemeColors } from "../constants/theme";

export default function SuccessModal({
  visible,
  onClose,
  text,
}: showModalProps) {
  const { theme } = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            {
              backgroundColor:
                theme === "dark" ? ThemeColors.dark : ThemeColors.iconGray,
            },
          ]}
        >
          <Pressable style={styles.closeIcon} onPress={() => onClose()}>
            <View>
              <Ionicons
                name="close-outline"
                size={24}
                color={
                  theme === "dark"
                    ? ThemeColors.lightGray
                    : ThemeColors.textPrimary
                }
              />
            </View>
          </Pressable>
          <Ionicons
            name="checkmark-circle-outline"
            size={48}
            color={theme === "dark" ? ThemeColors.lightGray : "#088f3a"}
          />
          <Text
            style={[
              styles.modalText,
              {
                color:
                  theme === "dark"
                    ? ThemeColors.lightGray
                    : ThemeColors.textPrimary,
              },
            ]}
          >
            {text}
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onClose()}
          >
            <Text style={styles.textStyle}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
