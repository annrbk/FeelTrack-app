import { View, Text } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import type { TodayStatisticsProps } from "../types/emotionTypes";

export default function TodayStatistics({
  todayEmotions,
}: TodayStatisticsProps) {
  return (
    <View style={styles.statistics}>
      <Text style={styles.statisticsTitle}>Today's Summary</Text>
      {todayEmotions.length > 0 ? (
        <View style={styles.statisticsContent}>
          {todayEmotions.map((todayEmotion) => {
            const emotionData = emotions.find(
              (e) => e.label === todayEmotion.label
            );
            return (
              <View style={styles.currentEmotion} key={todayEmotion.id}>
                <Text style={styles.currentEmotionEmoji}>
                  {emotionData?.emoji}
                </Text>
              </View>
            );
          })}
        </View>
      ) : (
        <View style={styles.statisticsEmpty}>
          <Text style={styles.emptyTitle}>No emotions tracked yet today</Text>
          <Text style={styles.emptySubtitle}>
            Start by selecting how you feel!
          </Text>
        </View>
      )}
    </View>
  );
}
