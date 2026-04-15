import { rosenbergSelfEsteemScale } from "../../constants/tests/rosenbergSelfEsteemScale";

export default function scoreRosenbergSelfEsteem(
  answers: Array<number | null> | null,
) {
  if (!answers) return;
  const questions = rosenbergSelfEsteemScale[0].questions;

  const calcResult = answers.reduce((acc: number, answer, index) => {
    if (!answer) return acc;
    const isReverse = questions[index].isReverse;
    const totalScore = isReverse ? 4 - answer : answer;
    return acc + totalScore;
  }, 0);
  return calcResult;
}
