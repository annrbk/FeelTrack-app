import { View, Text, Pressable } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import EmotionModal from "./EmotionModal";
import type { EmotionsSectionProps } from "../types/emotionTypes";

export default function EmotionsSection({
  user,
  emotion,
  setEmotion,
  modal,
  setModal,
  onCloseEmotionModal,
  addEmotion,
}: EmotionsSectionProps) {
  return (
    <>
      <View style={styles.description}>
        <Text style={styles.title}>Hello, {user?.name || "User"}</Text>
        <Text style={styles.subtitle}>Today can be a good day!</Text>
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
        <Text style={styles.emotionTitle}>How are you feeling now?</Text>
        <View style={styles.emotions}>
          {emotions.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={({ pressed }) =>
                  pressed ? styles.emotionActiveButton : styles.emotionButton
                }
                onPress={() => {
                  setEmotion({ label: item.label, emoji: item.emoji });
                  setModal(true);
                }}
              >
                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.emotionLabel}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
}
