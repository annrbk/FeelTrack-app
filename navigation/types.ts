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
  ForgotPassword: undefined;
  Account: undefined;
  MeditationList: { id: string };
  Settings: undefined;
  About: undefined;
  StatsByDay: {
    emotionsForDay: EmotionFromDB[];
    chosenDate: string;
  };
  ChangePassword: undefined;
  ChangeLanguage: undefined;
  VerifyCode: { email: string };
  ResetPassword: { email: string; code: string };
};
