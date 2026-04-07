import { View, Text } from "react-native";
import { styles } from "../styles/StatsByDayScreen.styles";
import { EmotionFromDB } from "../types/emotionTypes";

export default function EmotionItem({
  emotionEmoji,
  emotion,
  timeOfEmotion,
}: {
  emotionEmoji: string;
  emotion: EmotionFromDB;
  timeOfEmotion: string;
}) {
  return (
    <View style={styles.itemsContainer} key={emotion.id}>
      <View style={styles.itemContainer}>
        <Text style={styles.emotionEmoji}>{emotionEmoji}</Text>
        <Text style={styles.emotionLabel}>{emotion.label}</Text>
        <Text style={styles.emotionTime}>{timeOfEmotion}</Text>
      </View>
    </View>
  );
}
