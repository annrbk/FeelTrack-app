import { selfCriticismScale } from "../../constants/tests/selfCriticismScale";

export default function scoreSelfCriticism(
  answers: Array<number | null> | null,
) {
  if (!answers) return;

  let sumIS = 0;
  let sumHS = 0;
  let sumRS = 0;
  for (let i = 0; i < selfCriticismScale[0].questions.length; i++) {
    const question = selfCriticismScale[0].questions[i];
    const answer = answers[i];
    if (question.subscale === "IS") {
      sumIS += answer ?? 0;
    }
    if (question.subscale === "HS") {
      sumHS += answer ?? 0;
    }
    if (question.subscale === "RS") {
      sumRS += answer ?? 0;
    }
  }

  let resultIS = selfCriticismScale[0].results.find(
    (result) =>
      result.subscale === "IS" &&
      sumIS >= result.range[0] &&
      sumIS <= result.range[1],
  );

  let resultHS = selfCriticismScale[0].results.find(
    (result) =>
      result.subscale === "HS" &&
      sumHS >= result.range[0] &&
      sumHS <= result.range[1],
  );

  let resultRS = selfCriticismScale[0].results.find(
    (result) =>
      result.subscale === "RS" &&
      sumRS >= result.range[0] &&
      sumRS <= result.range[1],
  );

  return { resultIS, resultHS, resultRS, sumIS, sumHS, sumRS };
}
