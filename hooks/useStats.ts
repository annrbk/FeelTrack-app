import { useEffect, useState } from "react";
import getCurrentDate from "../utils/getCurrentDate";
import { getEmotionsWithDates } from "../services/statisticsService";
import { EmotionFromDB } from "../types/emotionTypes";
import { DateData } from "../types/dateDataType";

export const useStats = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [emotions, setEmotions] = useState<EmotionFromDB[]>([]);
  const [emotionByDate, setEmotionByDate] = useState<EmotionFromDB[]>([]);
  const [visible, setVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState("");

  useEffect(() => {
    const { dayOfMonth, monthName } = getCurrentDate();
    setCurrentDay(dayOfMonth);
    setCurrentMonth(monthName);
  }, []);

  useEffect(() => {
    getEmotions();
  }, []);

  const handleMonthChange = (month: DateData) => {
    const date = new Date(month.dateString);
    const monthName = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
  };

  const getEmotions = async () => {
    try {
      const emotionData = await getEmotionsWithDates();
      setEmotions(emotionData);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const formatDates = () => {
    const dataForStats: Record<string, { dots: { color: string }[] }> = {};
    for (const data of emotions) {
      const date = data.createdAt.slice(0, 10);
      dataForStats[date] = { dots: [{ color: "blue" }] };
    }
    return dataForStats;
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

  const onClose = () => {
    setVisible(false);
  };

  return {
    currentDay,
    currentMonth,
    emotionByDate,
    visible,
    chosenDate,
    formatDates,
    handleMonthChange,
    filterEmotionByDate,
    onClose,
  };
};
