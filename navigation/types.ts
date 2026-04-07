import { EmotionFromDB } from "../types/emotionTypes";
import { TestResult } from "../types/tests";

export type RootStackParamList = {
  FirstScreen: undefined;
  Authentication: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  Profile: undefined;
  Statistics: undefined;
  Care: undefined;
  Account: undefined;
  MeditationList: { id: string };
  TestScreen: { id: string };
  ResultScreen: { result: TestResult };
  Settings: undefined;
  StatsByDay: {
    emotionsForDay: EmotionFromDB[];
    chosenDate: string;
  };
};
