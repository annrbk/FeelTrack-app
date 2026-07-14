import { View, Text, Pressable } from "react-native";
import { emotions } from "../constants/emotions";
import { getStyles } from "../styles/MainScreen.styles";
import EmotionModal from "./EmotionModal";
import type { EmotionsSectionProps } from "../types/emotionTypes";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function EmotionsSection({
  user,
  emotion,
  setEmotion,
  modal,
  setModal,
  onCloseEmotionModal,
  addEmotion,
}: EmotionsSectionProps) {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.description}>
        <Text style={styles.title}>
          {t("home.title")}, {user?.name || t("home.user")}
        </Text>
        <Text style={styles.subtitle}>{t("home.subtitle")}</Text>
      </View>
      <View style={styles.emotionsContainer}>
        {emotion && (
          <EmotionModal
            visible={modal}
            emotion={emotion}
            onClose={onCloseEmotionModal}
            addEmotion={addEmotion}
          />
        )}
        <Text style={styles.emotionTitle}>{t("home.emotionTitle")}</Text>
        <View style={styles.emotions}>
          {emotions.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  pressed ? styles.emotionActiveButton : styles.emotionButton,
                ]}
                onPress={() => {
                  setEmotion({ label: item.label, emoji: item.emoji });
                  setModal(true);
                }}
              >
                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.emotionLabel}>
                  {t(`home.emotions.${item.label}`)}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
}
