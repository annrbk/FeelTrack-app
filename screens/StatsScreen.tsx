import { Calendar } from "react-native-calendars";
import { View, Text } from "react-native";
import { styles } from "../styles/StatsScreen.styles";
import StatsModal from "../components/StatsModal";
import { useStats } from "../hooks/useStats";

export default function StatsScreen() {
  const {
    currentDay,
    currentMonth,
    emotionByDate,
    visible,
    chosenDate,
    formatDates,
    handleMonthChange,
    filterEmotionByDate,
    onClose,
  } = useStats();

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
        onDayPress={(day) => {
          filterEmotionByDate(day.dateString);
        }}
        markingType={"multi-dot"}
        markedDates={formatDates()}
        renderHeader={() => {
          return (
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{currentMonth}</Text>
            </View>
          );
        }}
      />
      {emotionByDate && (
        <StatsModal
          emotionsByDate={emotionByDate}
          visible={visible}
          onClose={onClose}
          text={`Emotions for ${chosenDate}:`}
        />
      )}
    </View>
  );
}
