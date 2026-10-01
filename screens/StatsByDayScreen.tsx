import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/StatsByDayScreen.styles";
import { emotions } from "../constants/emotions";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";
import formatDate from "../utils/formatDate";
import EmotionItem from "../components/EmotionItem";
import { useTranslation } from "react-i18next";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import DeleteSwipeAction from "../components/DeleteSwipeAction";
import { useEmotion } from "../hooks/useEmotion";
import { useState } from "react";

export default function StatsByDayScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "StatsByDay">;
}) {
  const { emotionsForDay, chosenDate } = route.params;
  const [currentEmotions, setCurrentEmotions] = useState(emotionsForDay);
  const { deleteDayEmotion } = useEmotion();

  const { styles } = useAppStyle(getStyles);
  const { t, i18n } = useTranslation();

  const formattedDate = formatDate(chosenDate, i18n.language);

  const handleDelete = async (id: number) => {
    try {
      await deleteDayEmotion(id);
      setCurrentEmotions((prevEmotions) =>
        prevEmotions.filter((emotion) => emotion.id !== id),
      );
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle} pointerEvents="none">
          {t("statisticsScreen.header")}
        </Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.statisticsHeader}>
            <Text style={styles.statisticsTitle}>
              {t("statisticsScreen.dayTitle", { formattedDate })}
            </Text>
          </View>
          <View style={styles.emotionList}>
            {currentEmotions.length > 0 &&
              currentEmotions.map((emotion) => {
                const emotionData = emotions.find(
                  (e) => e.label === emotion.label,
                );
                const timeOfEmotion = new Date(
                  emotion.createdAt,
                ).toLocaleTimeString(i18n.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                });
                return (
                  <Swipeable
                    key={emotion.id}
                    renderRightActions={() => (
                      <DeleteSwipeAction
                        onDelete={() => handleDelete(emotion.id)}
                      />
                    )}
                  >
                    <EmotionItem
                      emotionEmoji={emotionData?.emoji || ""}
                      emotion={emotion}
                      timeOfEmotion={timeOfEmotion}
                    />
                  </Swipeable>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
