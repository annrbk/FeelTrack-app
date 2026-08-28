import { Text, ScrollView } from "react-native";
import { getStyles } from "../styles/MainScreen.styles";
import SuccessEmotionModal from "../components/SuccessEmotionModal";
import { useEmotion } from "../hooks/useEmotion";
import { useEffect } from "react";
import TodayStatistics from "../components/TodayStatistics";
import EmotionsSection from "../components/EmotionsSection";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <EmotionsSection
          user={user}
          emotion={emotion}
          setEmotion={setEmotion}
          modal={modal}
          setModal={setModal}
          onCloseEmotionModal={onCloseEmotionModal}
          addEmotion={(emotion) => addEmotion(emotion, selectedDate)}
        />
        <TodayStatistics
          todayEmotions={todayEmotions}
          deleteTodayEmotion={deleteTodayEmotion}
          goToNextDate={goToNextDate}
          goToPreviousDate={goToPreviousDate}
          selectedDate={selectedDate}
        />
        {successModal && (
          <SuccessEmotionModal
            visible={successModal}
            onClose={onCloseSuccessModal}
            text={t("successModal.closeButtonText")}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
