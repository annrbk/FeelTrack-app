import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { emotions } from "../constants/emotions";
import type { TodayStatisticsProps } from "../types/emotionTypes";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getStyles } from "../styles/MainScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";

export default function TodayStatistics({
  todayEmotions,
  deleteTodayEmotion,
  goToNextDate,
  goToPreviousDate,
  selectedDate,
}: TodayStatisticsProps) {
  const { styles, colors } = useAppStyle(getStyles);

  const renderRightActions = (todayEmotionId: number) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodayEmotion(todayEmotionId)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.statistics}>
      <View style={styles.statisticsHeader}>
        <Pressable onPress={goToPreviousDate}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>
        <Text style={styles.statisticsTitle}>
          Summary {selectedDate.toLocaleDateString()}
        </Text>
        <Pressable onPress={goToNextDate}>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>
      </View>
      {todayEmotions.length > 0 ? (
        <View style={styles.statisticsContent}>
          {todayEmotions.map((todayEmotion) => {
            const emotionData = emotions.find(
              (e) => e.label === todayEmotion.label,
            );
            const timeOfEmotion = new Date(todayEmotion.createdAt)
              .toLocaleTimeString()
              .slice(0, 5);
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
