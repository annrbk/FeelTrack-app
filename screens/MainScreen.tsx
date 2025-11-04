import { Pressable, Text, View } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";
import { useSession } from "../ctx";

export default function MainScreen() {
  const { user, isLoading } = useSession();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.title}>Hello, {user?.name || "User"}</Text>
        <Text style={styles.subtitle}>Today can be a good day!</Text>
      </View>
      <View style={styles.emotionsContainer}>
        <Text style={styles.emotionTitle}>How are you feeling today?</Text>
        <View style={styles.emotions}>
          {emotions.map((item, index) => {
            return (
              <Pressable key={index} style={styles.emotionButton}>
                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.emotionLabel}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
