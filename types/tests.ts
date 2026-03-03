import { ImageSourcePropType } from "react-native";

export type Question = {
  id: string;
  text: string;
  subscale?: string;
};

export type Option = {
  id: string;
  text: string;
  score: number;
};

export type Result = {
  id: string;
  range: number[];
  text: string;
  description: string;
  subscale?: string;
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
  results: Result[];
};

export type TestSectionItem = {
  data: TestItem[];
  title: string;
  subtitle: string;
};

export type TestResult = {
  testId: string;
  score?: number;
  subscaleResults?: {
    resultIS?: Result | null;
    resultHS?: Result | null;
    resultRS?: Result | null;
  };
  sumIS?: number;
  sumHS?: number;
  sumRS?: number;
};

export type ResultScoreProps = {
  result: TestResult;
  interpretation: {
    text: string;
    description: string;
  } | null;
};

export type ResultSubscaleItemProps = {
  subscale: "IS" | "HS" | "RS";
  sum: number | null | undefined;
  result: Result | null | undefined;
};
