export const generalAnxietyDisorder = [
  {
    id: "1",
    description: "description1",
    instruction:
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      { id: "1", text: "Feeling nervous, anxious or on edge?" },
      { id: "2", text: "Not being able to stop or control worrying?" },
      { id: "3", text: "Worrying too much about different things?" },
      { id: "4", text: "Trouble relaxing?" },
      { id: "5", text: "Being so restless that it's hard to sit still?" },
      { id: "6", text: "Becoming easily annoyed or irritable?" },
      { id: "7", text: "Feeling afraid as if something awful might happen?" },
    ],
    options: [
      { id: "1", text: "Not at all", score: 0 },
      { id: "2", text: "Several days", score: 1 },
      { id: "3", text: "More than half the days", score: 2 },
      { id: "4", text: "Nearly every day", score: 3 },
    ],
  },
];
