import { View, Text } from "react-native";
import { styles } from "../styles/ResultScreen.styles";
import { ResultScoreProps } from "../types/tests";

export default function ResultScore({
  result,
  interpretation,
}: ResultScoreProps) {
  return (
    <View>
      <Text style={styles.score}>Your score is: {result.score}</Text>
      <Text style={styles.interpretationTitle}>{interpretation?.text}</Text>
      <Text style={styles.interpretationText}>
        {interpretation?.description}
      </Text>
    </View>
  );
}
