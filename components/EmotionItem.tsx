import { View, Text } from "react-native";
import { getStyles } from "../styles/StatsByDayScreen.styles";
import { EmotionItemProps } from "../types/emotionTypes";
import { useAppStyle } from "../hooks/useAppStyle";

export default function EmotionItem({
  emotionEmoji,
  emotion,
  timeOfEmotion,
}: EmotionItemProps) {
  const { styles } = useAppStyle(getStyles);

  return (
    <View style={styles.emotionRow}>
      <Text style={styles.emotionEmoji}>{emotionEmoji}</Text>
      <Text style={styles.emotionLabel}>{emotion.label}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.emotionTime}>{timeOfEmotion}</Text>
      </View>
    </View>
  );
}
