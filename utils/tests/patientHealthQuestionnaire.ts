export default function scorePatientHealthQuestionnaire(
  answers: Array<number | null> | null,
) {
  if (!answers) return;
  const totalSum = answers.reduce((acc: number, sum) => acc + (sum ?? 0), 0);
  return totalSum;
}
