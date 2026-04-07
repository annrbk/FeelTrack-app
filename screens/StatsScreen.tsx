import { Calendar } from "react-native-calendars";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/StatsScreen.styles";
import { useStats } from "../hooks/useStats";
import { emotions } from "../constants/emotions";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import StatsModal from "../components/StatsModal";

export default function StatsScreen() {
  const {
    currentMonth,
    currentYear,
    emotionByDate,
    visible,
    chosenDate,
    handleMonthChange,
    filterEmotionByDate,
    groupedEmotionsByDate,
    onClose,
  } = useStats();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Statistics</Text>
      <Text style={styles.subtitle}>
        Track your emotional journey day by day
      </Text>
      <Calendar
        style={styles.calendarStyle}
        onMonthChange={handleMonthChange}
        hideExtraDays={true}
        markingType={"custom"}
        renderHeader={() => {
          return (
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{currentMonth}</Text>
              <Text style={styles.monthText}>{currentYear}</Text>
            </View>
          );
        }}
        dayComponent={({ date, marking }) => {
          const emotionsForDay =
            groupedEmotionsByDate[date?.dateString ?? ""] || [];
          return (
            <TouchableOpacity
              onPress={() => {
                if (emotionsForDay.length > 0) {
                  navigation.navigate("StatsByDay", {
                    emotionsForDay,
                    chosenDate: date?.dateString ?? "",
                  });
                } else {
                  filterEmotionByDate(date?.dateString ?? "");
                }
              }}
            >
              <View style={styles.dayContainer}>
                <Text>{date?.day}</Text>
                <View style={styles.emotionContainer}>
                  {emotionsForDay.length > 0
                    ? emotionsForDay.slice(0, 3).map((emotion) => {
                        const emotionEmoji = emotions.find(
                          (e) => e.label === emotion.label,
                        )?.emoji;
                        return (
                          <View key={emotion.id}>
                            <Text style={styles.emotionTextSmile}>
                              {emotionEmoji}
                            </Text>
                          </View>
                        );
                      })
                    : null}
                  {emotionsForDay.length > 3 && (
                    <View>
                      <Text
                        style={styles.emotionText}
                      >{`+${emotionsForDay.length - 3}`}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {emotionByDate.length === 0 && visible && (
        <StatsModal
          visible={visible}
          onClose={onClose}
          text={`No emotions recorded for ${chosenDate}`}
        />
      )}
    </View>
  );
}
