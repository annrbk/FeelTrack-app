import { Calendar } from "react-native-calendars";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "../styles/StatsScreen.styles";
import { useStats } from "../hooks/useStats";
import { emotions } from "../constants/emotions";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import StatsModal from "../components/StatsModal";
import { useAppStyle } from "../hooks/useAppStyle";

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

  const { styles, colors, isDark } = useAppStyle(getStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Statistics</Text>
      <Text style={styles.subtitle}>
        Track your emotional journey day by day
      </Text>
      <Calendar
        key={isDark ? "dark" : "light"}
        style={styles.calendarStyle}
        onMonthChange={handleMonthChange}
        hideExtraDays={true}
        markingType={"custom"}
        theme={{
          textDayFontFamily: "Montserrat_400Regular",
          textMonthFontFamily: "Montserrat_600SemiBold",
          textDayHeaderFontFamily: "Montserrat_500Medium",
          todayTextColor: colors.btnPrimary,
          arrowColor: colors.btnPrimary,
          selectedDayBackgroundColor: colors.btnPrimary,
          calendarBackground: colors.surfacePrimary,
          backgroundColor: colors.surfacePrimary,
        }}
        renderHeader={() => {
          return (
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{currentMonth}</Text>
              <Text style={styles.monthText}>{currentYear}</Text>
            </View>
          );
        }}
        dayComponent={({ date }) => {
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
                <Text style={styles.dayText}>{date?.day}</Text>
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
