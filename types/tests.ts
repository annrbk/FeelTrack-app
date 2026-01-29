import { ImageSourcePropType } from "react-native";

export type Question = {
  id: string;
  text: string;
};

export type Option = {
  id: string;
  text: string;
  score: number;
};

export type TestItem = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  summaryQuestion: string;
};

export type TestWithQuestions = TestItem & {
  description: string;
  instruction: string;
  questions: Question[];
  options: Option[];
};

export type TestSectionItem = {
  data: TestItem[];
  title: string;
  subtitle: string;
};
