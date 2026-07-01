import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/SuccessModal.styles";
import type { showModalProps } from "../types/modalType";
import { useAppStyle } from "../hooks/useAppStyle";

export default function SuccessModal({
  visible,
  onClose,
  text,
}: showModalProps) {
  const { styles, colors } = useAppStyle(getStyles);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeIcon} onPress={onClose}>
            <Ionicons
              name="close-outline"
              size={24}
              color={colors.textSecondary}
            />
          </Pressable>
          <Ionicons
            name="checkmark-outline"
            size={48}
            color={colors.btnSuccess}
          />
          <Text style={styles.modalText}>{text}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
