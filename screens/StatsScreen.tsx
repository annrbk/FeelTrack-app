import { Calendar } from "react-native-calendars";
import { View, Text, TouchableOpacity } from "react-native";
import { useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getStyles } from "../styles/StatsScreen.styles";
import { useStats } from "../hooks/useStats";
import { emotions } from "../constants/emotions";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import StatsModal from "../components/StatsModal";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function StatsScreen() {
  const {
    emotionByDate,
    visible,
    chosenDate,
    calendarDate,
    handleMonthChange,
    filterEmotionByDate,
    groupedEmotionsByDate,
    onClose,
    resetToToday,
  } = useStats();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { styles, colors, isDark } = useAppStyle(getStyles);
  const { t, i18n } = useTranslation();
  const skipNextResetRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (skipNextResetRef.current) {
        skipNextResetRef.current = false;
        return;
      }
      resetToToday();
    }, [resetToToday]),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("statisticsScreen.title")}</Text>
      <Text style={styles.subtitle}>{t("statisticsScreen.subtitle")}</Text>
      <Calendar
        key={`${calendarDate}-${isDark ? "dark" : "light"}-${i18n.language}`}
        style={styles.calendarStyle}
        onMonthChange={handleMonthChange}
        hideExtraDays={true}
        markingType={"custom"}
        current={calendarDate}
        theme={{
          textDayFontFamily: "Montserrat_400Regular",
          textMonthFontFamily: "Montserrat_500Medium",
          textMonthFontSize: 18,
          textDayHeaderFontFamily: "Montserrat_500Medium",
          todayTextColor: colors.btnPrimary,
          arrowColor: colors.btnPrimary,
          selectedDayBackgroundColor: colors.btnPrimary,
          calendarBackground: colors.surfacePrimary,
          backgroundColor: colors.surfacePrimary,
          monthTextColor: colors.textPrimary,
          textSectionTitleColor: colors.btnActive,
        }}
        dayComponent={({ date }) => {
          const emotionsForDay =
            groupedEmotionsByDate[date?.dateString ?? ""] || [];
          return (
            <TouchableOpacity
              onPress={() => {
                if (emotionsForDay.length > 0) {
                  skipNextResetRef.current = true;
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
          text={t("statisticsScreen.emptyEmotions", { date: chosenDate })}
        />
      )}
    </View>
  );
}
