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
              emotionsByDate.map((emotion) => (
                <View key={emotion.id}>
                  <Text style={styles.emotionItem}>
                    {emotions.find((e) => emotion.label === e.label)?.emoji}
                  </Text>
                </View>
              ))
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
