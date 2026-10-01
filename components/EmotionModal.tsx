import React, { useState } from "react";
import { Modal, Text, Pressable, View, ActivityIndicator } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/SuccessModal.styles";
import type { EmotionModalProps } from "../types/emotionTypes";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation, Trans } from "react-i18next";

export default function EmotionModal({
  visible,
  emotion,
  onClose,
  addEmotion,
}: EmotionModalProps) {
  const { styles, colors } = useAppStyle(getStyles);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await addEmotion(emotion);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            <Trans
              i18nKey="emotionModal.modalText"
              values={{ emotion: t(`home.emotions.${emotion.label}`) }}
              components={{ accent: <Text style={styles.accentText} /> }}
            />
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.buttonClose,
              pressed && styles.buttonPressed,
            ]}
            aria-label="Confirm"
            disabled={isLoading}
            onPress={handleConfirm}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.textStyle}>
                {t("emotionModal.confirmButtonText")}
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
