import { View, Text, ScrollView } from "react-native";
import { getStyles } from "../styles/StatsByDayScreen.styles";
import { emotions } from "../constants/emotions";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";
import formatDate from "../utils/formatDate";
import EmotionItem from "../components/EmotionItem";
import { useTranslation } from "react-i18next";

export default function StatsByDayScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "StatsByDay">;
}) {
  const { emotionsForDay, chosenDate } = route.params;
  const { styles } = useAppStyle(getStyles);
  const { t, i18n } = useTranslation();

  const formattedDate = formatDate(chosenDate, i18n.language);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>{t("statisticsScreen.header")}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.statisticsHeader}>
          <Text style={styles.statisticsTitle}>
            {t("statisticsScreen.dayTitle", { formattedDate })}
          </Text>
        </View>
        <View style={styles.emotionList}>
          {emotionsForDay.length > 0 &&
            emotionsForDay.map((emotion) => {
              const emotionData = emotions.find(
                (e) => e.label === emotion.label,
              );
              const timeOfEmotion = new Date(emotion.createdAt)
                .toLocaleTimeString()
                .slice(0, 5);
              return (
                <EmotionItem
                  key={emotion.id}
                  emotionEmoji={emotionData?.emoji || ""}
                  emotion={emotion}
                  timeOfEmotion={timeOfEmotion}
                />
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
}
