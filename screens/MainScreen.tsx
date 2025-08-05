import { Pressable, Text, View, StyleSheet } from "react-native";
import { emotions } from "../constants/emotions";
import { styles } from "../styles/MainScreen.styles";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.title}>Hello, username</Text>
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
