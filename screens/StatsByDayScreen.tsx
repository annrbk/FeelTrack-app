import { View, Text, ScrollView } from "react-native";
import { getStyles } from "../styles/StatsByDayScreen.styles";
import { emotions } from "../constants/emotions";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";
import formatDate from "../utils/formatDate";
import EmotionItem from "../components/EmotionItem";

export default function StatsByDayScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "StatsByDay">;
}) {
  const { emotionsForDay, chosenDate } = route.params;
  const { styles } = useAppStyle(getStyles);

  const formattedDate = formatDate(chosenDate);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.statisticsHeader}>
          <Text style={styles.statisticsTitle}>
            How you felt on {formattedDate}
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
