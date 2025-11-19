import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/SuccessModal.styles";
import type { showModalProps } from "../types/modalType";

export default function SuccessModal({ visible, onClose }: showModalProps) {
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
          <Pressable style={styles.closeIcon} onPress={() => onClose()}>
            <View>
              <Ionicons name="close-outline" size={24} color="#000" />
            </View>
          </Pressable>
          <Ionicons
            name="checkmark-circle-outline"
            size={48}
            color="#1dba1dff"
          />
          <Text style={styles.modalText}>Changes saved!</Text>
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
