import { Text, ScrollView } from "react-native";
import { styles } from "../styles/MainScreen.styles";
import SuccessModal from "../components/SuccessModal";
import { useEmotion } from "../hooks/useEmotion";
import { useEffect } from "react";
import TodayStatistics from "../components/TodayStatistics";
import EmotionsSection from "../components/EmotionsSection";

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
  } = useEmotion();

  useEffect(() => {
    getEmotions();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

  return (
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
      />
      {successModal && (
        <SuccessModal
          visible={successModal}
          onClose={onCloseSuccessModal}
          text={"Your emotion added successfully!"}
        />
      )}
    </ScrollView>
  );
}
