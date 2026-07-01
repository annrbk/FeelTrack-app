import { Text, ScrollView } from "react-native";
import { getStyles } from "../styles/MainScreen.styles";
import SuccessModal from "../components/SuccessModal";
import { useEmotion } from "../hooks/useEmotion";
import { useEffect } from "react";
import TodayStatistics from "../components/TodayStatistics";
import EmotionsSection from "../components/EmotionsSection";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppStyle } from "../hooks/useAppStyle";

export default function MainScreen() {
  const {
    user,
    isLoading,
    emotion,
    setEmotion,
    setModal,
    modal,
    addEmotion,
    successModal,
    onCloseEmotionModal,
    onCloseSuccessModal,
    getEmotions,
    todayEmotions,
    deleteTodayEmotion,
    goToNextDate,
    goToPreviousDate,
    selectedDate,
  } = useEmotion();

  const { styles } = useAppStyle(getStyles);

  useEffect(() => {
    getEmotions();
  }, [selectedDate]);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SafeAreaProvider>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <EmotionsSection
          user={user}
          emotion={emotion}
          setEmotion={setEmotion}
          modal={modal}
          setModal={setModal}
          onCloseEmotionModal={onCloseEmotionModal}
          addEmotion={addEmotion}
        />
        <TodayStatistics
          todayEmotions={todayEmotions}
          deleteTodayEmotion={deleteTodayEmotion}
          goToNextDate={goToNextDate}
          goToPreviousDate={goToPreviousDate}
          selectedDate={selectedDate}
        />
        {successModal && (
          <SuccessModal
            visible={successModal}
            onClose={onCloseSuccessModal}
            text={"Your emotion added successfully!"}
          />
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}
