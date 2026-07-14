import { View, Text } from "react-native";
import { getStyles } from "../styles/StatsByDayScreen.styles";
import { EmotionItemProps } from "../types/emotionTypes";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function EmotionItem({
  emotionEmoji,
  emotion,
  timeOfEmotion,
}: EmotionItemProps) {
  const { styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <View style={styles.emotionRow}>
      <Text style={styles.emotionEmoji}>{emotionEmoji}</Text>
      <Text style={styles.emotionLabel}>
        {t(`home.emotions.${emotion.label}`)}
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.emotionTime}>{timeOfEmotion}</Text>
      </View>
    </View>
  );
}
