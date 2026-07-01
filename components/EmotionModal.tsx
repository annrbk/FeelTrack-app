import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/SuccessModal.styles";
import type { EmotionModalProps } from "../types/emotionTypes";
import { useAppStyle } from "../hooks/useAppStyle";

export default function EmotionModal({
  visible,
  emotion,
  onClose,
  addEmotion,
}: EmotionModalProps) {
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
          <Text style={styles.emoji}>{emotion.emoji}</Text>
          <Text style={styles.modalText}>
            You have chosen
            <Text style={styles.accentText}> "{emotion.label}"</Text>. {"\n"}
            Confirm your choice?
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
