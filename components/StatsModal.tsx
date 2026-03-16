import { Modal, View, Text, Pressable } from "react-native";
import { EmotionFromDB } from "../types/emotionTypes";
import { showModalProps } from "../types/modalType";
import { styles } from "../styles/StatsModal.styles";
import { emotions } from "../constants/emotions";

export default function StatsModal({
  emotionsByDate,
  visible,
  onClose,
  text,
}: { emotionsByDate: EmotionFromDB[] } & showModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{text}</Text>
          <View style={styles.emotionView}>
            {emotionsByDate.length > 0 ? (
              emotionsByDate.map((emotion) => {
                const emotionEmoji = emotions.find(
                  (e) => e.label === emotion.label,
                )?.emoji;
                const timeOfEmotion = new Date(
                  emotion.createdAt,
                ).toLocaleTimeString();
                return (
                  <View style={styles.itemsContainer} key={emotion.id}>
                    <View style={styles.itemContainer}>
                      <Text style={styles.emotionEmoji}>{emotionEmoji}</Text>
                      <Text style={styles.emotionLabel}>{emotion.label}</Text>
                      <Text style={styles.emotionTime}>{timeOfEmotion}</Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <View>
                <Text>Emotions were not selected</Text>
              </View>
            )}
          </View>
          <Pressable style={styles.button} onPress={() => onClose()}>
            <Text style={styles.buttonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
