import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/StatsByDayScreen.styles";
import { emotions } from "../constants/emotions";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import EmotionItem from "../components/EmotionItem";

export default function StatsByDayScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "StatsByDay">;
}) {
  const { emotionsForDay, chosenDate } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>Statistics for day</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`Emotions for ${chosenDate}:`}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.emotionView}>
          {emotionsForDay.length > 0 &&
            emotionsForDay.map((emotion) => {
              const emotionEmoji = emotions.find(
                (e) => e.label === emotion.label,
              )?.emoji;
              const timeOfEmotion = new Date(
                emotion.createdAt,
              ).toLocaleTimeString();
              return (
                <EmotionItem
                  key={emotion.id}
                  emotionEmoji={emotionEmoji ?? ""}
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
