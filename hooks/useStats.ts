import { useEffect, useState } from "react";
import getCurrentDate from "../utils/getCurrentDate";
import { getEmotionsWithDates } from "../services/statisticsService";
import { EmotionFromDB } from "../types/emotionTypes";
import { DateData } from "../types/dateDataType";

export const useStats = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState(0);
  const [emotions, setEmotions] = useState<EmotionFromDB[]>([]);
  const [emotionByDate, setEmotionByDate] = useState<EmotionFromDB[]>([]);
  const [visible, setVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState("");

  useEffect(() => {
    const { dayOfMonth, monthName, year } = getCurrentDate();
    setCurrentDay(dayOfMonth);
    setCurrentMonth(monthName);
    setCurrentYear(year);
  }, []);

  useEffect(() => {
    getEmotions();
  }, []);

  const handleMonthChange = (month: DateData) => {
    const date = new Date(month.dateString);
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    setCurrentMonth(monthName);
    setCurrentYear(year);
  };

  const getEmotions = async () => {
    try {
      const emotionData = await getEmotionsWithDates();
      setEmotions(emotionData);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const filterEmotionByDate = (chosenDate: string) => {
    setChosenDate(chosenDate);
    const emotionByDate = emotions.filter((emotion) => {
      if (emotion.createdAt.slice(0, 10) === chosenDate) {
        return emotion;
      }
    });
    setEmotionByDate(emotionByDate);
    setVisible(true);
  };

  const filterEmotion = (emotions: EmotionFromDB[]) => {
    const groupedByDate: { [date: string]: EmotionFromDB[] } = {};
    emotions.forEach((emotion) => {
      const date = emotion.createdAt.slice(0, 10);
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(emotion);
    });
    return groupedByDate;
  };

  const groupedEmotionsByDate: { [date: string]: EmotionFromDB[] } =
    filterEmotion(emotions);

  const onClose = () => {
    setVisible(false);
  };

  return {
    currentDay,
    currentMonth,
    currentYear,
    emotionByDate,
    visible,
    chosenDate,
    handleMonthChange,
    filterEmotionByDate,
    filterEmotion,
    groupedEmotionsByDate,
    onClose,
  };
};
