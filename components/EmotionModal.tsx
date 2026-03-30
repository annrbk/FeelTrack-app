import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/SuccessModal.styles";
import type { EmotionModalProps } from "../types/emotionTypes";
import { ThemeColors } from "../constants/theme";
import { useTheme } from "../context/ThemeContext";

export default function EmotionModal({
  visible,
  emotion,
  onClose,
  addEmotion,
}: EmotionModalProps) {
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
                  theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark
                }
              />
            </View>
          </Pressable>
          <Text style={styles.emoji}>{emotion.emoji}</Text>
          <Text
            style={[
              styles.modalText,
              {
                color:
                  theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark,
              },
            ]}
          >
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
