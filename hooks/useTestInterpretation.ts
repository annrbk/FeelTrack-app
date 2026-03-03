import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { tests } from "../constants/tests/allTests";

export default function useTestInterpretation({
  route,
}: {
  route: RouteProp<RootStackParamList, "ResultScreen">;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const id = route.params.result?.testId;
  const selectedTest = tests.find((test) => test.id === id);

  const { result } = route.params;

  const score = result?.score;

  const interpretation =
    score != null
      ? selectedTest?.results.find(
          (r) => score >= r.range[0] && score <= r.range[1],
        ) || null
      : null;

  const handleTryAgain = () => {
    navigation.navigate("TestScreen", { id: id });
  };

  return {
    result,
    interpretation,
    handleTryAgain,
  };
}
