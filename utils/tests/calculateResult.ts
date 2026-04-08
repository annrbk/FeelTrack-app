import scoreGenAnxDis from "./generalAnxietyDisorder";
import scorePatientHealthQuestionnaire from "./patientHealthQuestionnaire";
import scoreSelfCriticism from "./selfCriticismScale";

export default function calculateResult(
  id: string,
  answers: Array<number | null> | null,
) {
  switch (id) {
    case "1": {
      const score = scoreGenAnxDis(answers);
      return { testId: "1", score };
    }

    case "2": {
      const subscaleResults = scoreSelfCriticism(answers);
      return {
        testId: "2",
        subscaleResults: {
          resultIS: subscaleResults?.resultIS,
          resultHS: subscaleResults?.resultHS,
          resultRS: subscaleResults?.resultRS,
        },
        sumIS: subscaleResults?.sumIS,
        sumHS: subscaleResults?.sumHS,
        sumRS: subscaleResults?.sumRS,
      };
    }

    case "3": {
      const score = scorePatientHealthQuestionnaire(answers);
      return { testId: "3", score };
    }

    default: {
      return null;
    }
  }
}
