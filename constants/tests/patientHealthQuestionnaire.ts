export const patientHealthQuestionnaire = [
  {
    id: "3",
    name: "Patient Health Questionnaire",
    description:
      "A widely used tool for screening, diagnosing, monitoring, and measuring the severity of depression.",
    instruction:
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      {
        id: "1",
        text: "Little interest or pleasure in doing things.",
      },
      {
        id: "2",
        text: "Feeling down, depressed, or hopeless.",
      },
      {
        id: "3",
        text: "Trouble falling or staying asleep, or sleeping too much.",
      },
      {
        id: "4",
        text: "Feeling tired or having little energy.",
      },
      {
        id: "5",
        text: "Poor appetite or overeating.",
      },
      {
        id: "6",
        text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down.",
      },
      {
        id: "7",
        text: "Trouble concentrating on things, such as reading the newspaper or watching television.",
      },
      {
        id: "8",
        text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual.",
      },
      {
        id: "9",
        text: "Thoughts that you would be better off dead or of hurting yourself in some way.",
      },
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
        text: "Depression severity: none-minimal (0-4)",
        description:
          "No significant symptoms are currently indicated. It is recommended to continue self-monitoring and pay attention to any changes in your emotional well-being.",
      },
      {
        id: "2",
        range: [5, 9],
        text: "Depression severity: mild (5-9)",
        description:
          "It may be helpful to pay closer attention to your emotional state and consider retaking the test later. Rest, support, and basic self-care strategies may also be beneficial.",
      },
      {
        id: "3",
        range: [10, 14],
        text: "Depression severity: moderate (10-14)",
        description:
          "It is recommended to take a closer look at your current emotional well-being and consider consulting a mental health professional.",
      },
      {
        id: "4",
        range: [15, 19],
        text: "Depression severity: moderately severe (15-19)",
        description:
          "Seeking professional support is strongly recommended. Talking to a psychologist or healthcare provider may be helpful.",
      },
      {
        id: "5",
        range: [20, 27],
        text: "Depression severity: severe (20-27)",
        description:
          "It is recommended to seek professional support as soon as possible for a more thorough evaluation and appropriate care.",
      },
    ],
  },
];
