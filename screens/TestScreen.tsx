import { View, Text, Pressable } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/TestScreen.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTestActions } from "../hooks/useTestActions";
import useTestFinish from "../hooks/useTestFinish";

export default function TestScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "TestScreen">;
}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { id } = route.params;

  const {
    selectedTest,
    answers,
    currentQuestion,
    result,
    setResult,
    handleNext,
    handlePrevious,
    selectOption,
    isDisabled,
  } = useTestActions(id);

  const calculateTestScore = useTestFinish({
    id,
    answers,
    setResult,
  });

  if (!selectedTest) {
    return (
      <View>
        <Text>Test not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
        >
          <Text>Back</Text>
        </Pressable>
        <Text style={styles.title}>{selectedTest?.name}</Text>
        <View>
          <Text style={styles.instruction}>{selectedTest.instruction}</Text>
          <View style={styles.questionCounterContainer}>
            <Text style={styles.questionCounter}>
              {selectedTest.questions[currentQuestion].id}/
              {selectedTest.questions.length}
            </Text>
          </View>
          <Text style={styles.question}>
            {selectedTest.questions[currentQuestion].text}
          </Text>
        </View>
        {selectedTest.options.map((option, id) => {
          return (
            <Pressable
              key={option.id}
              style={
                answers && answers[currentQuestion] === option.score
                  ? styles.optionButtonClicked
                  : styles.optionButton
              }
              onPress={() => selectOption(option)}
            >
              <Text>{option.text}</Text>
            </Pressable>
          );
        })}
        <View style={styles.navigationContainer}>
          <Pressable style={styles.previousButton} onPress={handlePrevious}>
            <Text>Previous</Text>
          </Pressable>
          {currentQuestion < selectedTest.questions.length - 1 ? (
            <Pressable
              style={isDisabled ? styles.disabledButton : styles.nextButton}
              onPress={handleNext}
              disabled={isDisabled}
            >
              <Text>Next</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.nextButton}
              onPress={() => calculateTestScore()}
            >
              <Text>Finish</Text>
            </Pressable>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
