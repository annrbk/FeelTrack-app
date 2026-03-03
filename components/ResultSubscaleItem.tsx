import { Text, View } from "react-native";
import { styles } from "../styles/ResultScreen.styles";
import { ResultSubscaleItemProps } from "../types/tests";

export default function ResultSubscaleItem({
  subscale,
  sum,
  result,
}: ResultSubscaleItemProps) {
  return (
    <View>
      <Text style={styles.interpretationTitle}>Subscale {subscale}</Text>
      <Text style={styles.interpretationText}>
        Total sum: {sum} - {result?.text}
      </Text>
      <Text style={styles.interpretationText}>{result?.description}</Text>
    </View>
  );
}
