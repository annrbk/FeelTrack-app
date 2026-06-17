import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import type { TodayStatisticsProps } from "../types/emotionTypes";
import { moderateScale } from "react-native-size-matters";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../context/ThemeContext";
import { ThemeColors } from "../constants/theme";
import { typography } from "../styles/typography";

export default function TodayStatistics({
  todayEmotions,
  deleteTodayEmotion,
  goToNextDate,
  goToPreviousDate,
  selectedDate,
}: TodayStatisticsProps) {
  const { theme } = useTheme();
  const renderRightActions = (todayEmotionId: number) => {
    return (
      <TouchableOpacity
        style={{
          height: moderateScale(48),
          alignItems: "center",
          justifyContent: "center",
          width: moderateScale(64),
          backgroundColor: ThemeColors.btnWarning,
          borderRadius: 10,
        }}
        onPress={() => deleteTodayEmotion(todayEmotionId)}
      >
        <Text style={{ color: ThemeColors.white, ...typography.regular }}>
          Delete
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.statistics]}>
      <View style={styles.statisticsHeader}>
        <Pressable onPress={goToPreviousDate}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark}
          />
        </Pressable>
        <Text
          style={[
            styles.statisticsTitle,
            {
              color:
                theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark,
            },
          ]}
        >
          Summary {selectedDate.toLocaleDateString()}
        </Text>
        <Pressable onPress={goToNextDate}>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark}
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
                  <Text
                    style={[
                      styles.currentEmotionLabel,
                      {
                        color:
                          theme === "dark"
                            ? ThemeColors.lightGray
                            : ThemeColors.dark,
                      },
                    ]}
                  >
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
          <Text
            style={[
              styles.emptyTitle,
              {
                color:
                  theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark,
              },
            ]}
          >
            No emotions tracked yet today
          </Text>
          <Text
            style={[
              styles.emptySubtitle,
              {
                color:
                  theme === "dark" ? ThemeColors.lightGray : ThemeColors.dark,
              },
            ]}
          >
            Start by selecting how you feel!
          </Text>
        </View>
      )}
    </View>
  );
}
