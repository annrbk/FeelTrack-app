import { Text, Pressable, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/ResultScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import useTestInterpretation from "../hooks/useTestInterpretation";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ResultScore from "../components/ResultScore";
import ResultSubscale from "../components/ResultSubscale";
import BackButton from "../components/BackButton";

export default function ResultScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "ResultScreen">;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { result, interpretation, handleTryAgain } = useTestInterpretation({
    route,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.title}>View your results</Text>
      </View>
      {result.testId === "1" ||
      result.testId === "3" ||
      result.testId === "4" ? (
        <ResultScore result={result} interpretation={interpretation} />
      ) : (
        <ResultSubscale result={result} />
      )}
      <Pressable onPress={handleTryAgain} style={styles.button}>
        <Text style={styles.buttonText}>Try again</Text>
      </Pressable>
    </SafeAreaView>
  );
}
