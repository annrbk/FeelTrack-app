import { EmotionFromDB } from "../types/emotionTypes";

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
  Settings: undefined;
  StatsByDay: {
    emotionsForDay: EmotionFromDB[];
    chosenDate: string;
  };
};
