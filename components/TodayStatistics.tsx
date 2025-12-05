import { View, Text, TouchableOpacity } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import type { TodayStatisticsProps } from "../types/emotionTypes";
import { moderateScale } from "react-native-size-matters";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function TodayStatistics({
  todayEmotions,
  deleteTodayEmotion,
}: TodayStatisticsProps) {
  const renderRightActions = (todayEmotionId: number) => {
    return (
      <TouchableOpacity
        style={{
          height: moderateScale(48),
          alignItems: "center",
          justifyContent: "center",
          width: moderateScale(64),
          backgroundColor: "red",
          borderRadius: 8,
        }}
        onPress={() => deleteTodayEmotion(todayEmotionId)}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.statistics}>
      <Text style={styles.statisticsTitle}>Today's Summary</Text>
      {todayEmotions.length > 0 ? (
        <View style={styles.statisticsContent}>
          {todayEmotions.map((todayEmotion) => {
            const emotionData = emotions.find(
              (e) => e.label === todayEmotion.label
            );
            const timeOfEmotion = new Date(
              todayEmotion?.createdAt
            ).toLocaleTimeString();
            return (
              <Swipeable
                key={todayEmotion.id}
                renderRightActions={() => renderRightActions(todayEmotion.id)}
              >
                <View style={styles.currentEmotion}>
                  <Text style={styles.currentEmotionEmoji}>
                    {emotionData?.emoji}
                  </Text>
                  <Text style={styles.currentEmotionLabel}>
                    {emotionData?.label}
                  </Text>
                  <View style={styles.timeContainer}>
                    <Text style={styles.currentEmotionTime}>
                      {timeOfEmotion}
                    </Text>
                  </View>
                </View>
              </Swipeable>
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
