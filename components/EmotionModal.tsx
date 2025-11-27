import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/SuccessModal.styles";
import type { EmotionModalProps } from "../types/emotionTypes";

export default function EmotionModal({
  visible,
  emotion,
  onClose,
  addEmotion,
}: EmotionModalProps) {
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
          <Text style={styles.emoji}>{emotion.emoji}</Text>
          <Text style={styles.modalText}>
            {`You have chosen "${emotion.label}". Confirm your choice?`}
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            aria-label="Confirm"
            onPress={() => addEmotion(emotion)}
          >
            <Text style={styles.textStyle}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
