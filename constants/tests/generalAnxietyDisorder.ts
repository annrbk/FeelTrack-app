export const generalAnxietyDisorder = [
  {
    id: "1",
    name: "Generalized Anxiety Disorder",
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
    results: [
      {
        id: "1",
        range: [0, 4],
        text: "Normal: 0-4",
        description:
          "Your score suggests that any anxiety symptoms you may experience are likely mild and unlikely to significantly interfere with your daily life. You seem to be coping well with current challenges. Keep taking care of yourself and maintaining habits that support your well-being — they matter more than you might think.",
      },
      {
        id: "2",
        range: [5, 9],
        text: "Mild Anxiety: 5-9",
        description:
          "Your score indicates the presence of mild anxiety symptoms. While generally manageable, they may sometimes cause discomfort. Remember that experiencing some anxiety is normal, and you’re not alone in feeling this way. Small, consistent steps like rest, movement, or talking to someone you trust can make a real difference.",
      },
      {
        id: "3",
        range: [10, 14],
        text: "Moderate Anxiety: 10-14",
        description:
          "Your score suggests that anxiety symptoms occur regularly and may start affecting your daily activities. It may be helpful to discuss these symptoms with a healthcare professional. You deserve support, and reaching out is a strong and positive step toward feeling better. Many people successfully learn ways to manage anxiety with the right tools and guidance.",
      },
      {
        id: "4",
        range: [15, 21],
        text: "Severe Anxiety: 15-21",
        description:
          "Your score indicates frequent and intense anxiety symptoms that may significantly impact your daily functioning. Seeking professional evaluation and support is strongly recommended. You don’t have to handle this on your own — support exists, and improvement is possible with the right help and care.",
      },
    ],
  },
];
