import { Pressable, Text, View, ScrollView } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import EmotionModal from "../components/EmotionModal";
import SuccessModal from "../components/SuccessModal";
import { useEmotion } from "../hooks/useEmotion";

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
  } = useEmotion();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.description}>
        <Text style={styles.title}>Hello, {user?.name || "User"}</Text>
        <Text style={styles.subtitle}>Today can be a good day!</Text>
      </View>
      <View style={styles.emotionsContainer}>
        {emotion && (
          <EmotionModal
            visible={modal}
            emotion={emotion}
            onClose={onCloseEmotionModal}
            addEmotion={addEmotion}
          />
        )}
        <Text style={styles.emotionTitle}>How are you feeling now?</Text>
        <View style={styles.emotions}>
          {emotions.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={({ pressed }) =>
                  pressed ? styles.emotionActiveButton : styles.emotionButton
                }
                onPress={() => {
                  setEmotion({ label: item.label, emoji: item.emoji });
                  setModal(true);
                }}
              >
                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.emotionLabel}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
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
