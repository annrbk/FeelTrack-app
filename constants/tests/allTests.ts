import { generalAnxietyDisorder } from "./generalAnxietyDisorder";
import { patientHealthQuestionnaire } from "./patientHealthQuestionnaire";
import { selfCriticismScale } from "./selfCriticismScale";
import { rosenbergSelfEsteemScale } from "./rosenbergSelfEsteemScale";

export const tests = [
  ...generalAnxietyDisorder,
  ...selfCriticismScale,
  ...patientHealthQuestionnaire,
  ...rosenbergSelfEsteemScale,
];
