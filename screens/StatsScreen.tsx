import { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import { View, Text } from "react-native";
import { styles } from "../styles/StatsScreen.styles";
import getCurrentDate from "../utils/getCurrentDate";

type DateData = {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
};

export default function StatsScreen() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const { dayOfMonth, monthName } = getCurrentDate();
    setCurrentDay(dayOfMonth);
    setCurrentMonth(monthName);
  }, []);

  const handleMonthChange = (month: DateData) => {
    const date = new Date(month.dateString);
    const monthName = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
  };

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
        renderHeader={() => {
          return (
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{currentMonth}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
