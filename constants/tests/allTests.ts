import { generalAnxietyDisorder } from "./generalAnxietyDisorder";
import { patientHealthQuestionnaire } from "./patientHealthQuestionnaire";
import { selfCriticismScale } from "./selfCriticismScale";

export const tests = [
  ...generalAnxietyDisorder,
  ...selfCriticismScale,
  ...patientHealthQuestionnaire,
];
