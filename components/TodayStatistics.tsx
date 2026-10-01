import React from "react";
import { View, Text, Pressable } from "react-native";
import { emotions } from "../constants/emotions";
import type { TodayStatisticsProps } from "../types/emotionTypes";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getStyles } from "../styles/MainScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import DeleteSwipeAction from "./DeleteSwipeAction";

export default function TodayStatistics({
  todayEmotions,
  deleteTodayEmotion,
  goToNextDate,
  goToPreviousDate,
  selectedDate,
}: TodayStatisticsProps) {
  const { styles, colors } = useAppStyle(getStyles);
  const { t, i18n } = useTranslation();

  const formattedDate = selectedDate.toLocaleDateString(i18n.language, {
    day: "numeric",
    month: "long",
  });

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
          {t("home.statisticsTitle")} {formattedDate}
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
            const timeOfEmotion = new Date(
              todayEmotion.createdAt,
            ).toLocaleTimeString(i18n.language, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });
            return (
              <Swipeable
                key={todayEmotion.id}
                renderRightActions={() => (
                  <DeleteSwipeAction
                    onDelete={() => deleteTodayEmotion(todayEmotion.id)}
                  />
                )}
              >
                <View style={styles.currentEmotion}>
                  <Text style={styles.currentEmotionEmoji}>
                    {emotionData?.emoji}
                  </Text>
                  <Text style={styles.currentEmotionLabel}>
                    {t(`home.emotions.${todayEmotion.label}`)}
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
          <Text style={styles.emptyTitle}>{t("home.emptyTitle")}</Text>
          <Text style={styles.emptySubtitle}>{t("home.emptySubtitle")}</Text>
        </View>
      )}
    </View>
  );
}
