import calculateResult from "../utils/tests/calculateResult";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { TestResult } from "../types/tests";

export default function useTestFinish({
  id,
  answers,
  setResult,
}: {
  id: string;
  answers: Array<number | null> | null;
  setResult: (result: TestResult) => void;
}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const calculateTestScore = () => {
    if (!answers) return;
    const result = calculateResult(id, answers);
    if (result == null) return;
    setResult(result);
    navigation.replace("ResultScreen", { result });
  };
  return calculateTestScore;
}
