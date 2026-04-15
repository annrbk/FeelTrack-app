export const rosenbergSelfEsteemScale = [
  {
    id: "4",
    name: "Rosenberg Self-Esteem Scale",
    description: "Measure your self-esteem level.",
    instruction:
      "Below is a list of statements dealing with your general feelings about yourself. Select how much you disagree or agree with them.",
    questions: [
      {
        id: "1",
        text: "I feel that I'm a person of worth, at least on an equal plane with others.",
        isReverse: false,
      },
      {
        id: "2",
        text: "I feel that I have a number of good qualities.",
        isReverse: true,
      },
      {
        id: "3",
        text: "All in all, I am inclined to feel that I am a failure.",
        isReverse: false,
      },
      {
        id: "4",
        text: "I am able to do things as well as most other people.",
        isReverse: false,
      },
      {
        id: "5",
        text: "I feel I do not have much to be proud of.",
        isReverse: true,
      },
      {
        id: "6",
        text: "I take a positive attitude toward myself.",
        isReverse: false,
      },
      {
        id: "7",
        text: "On the whole, I am satisfied with myself.",
        isReverse: true,
      },
      {
        id: "8",
        text: "I wish I could have more respect for myself.",
        isReverse: true,
      },
      {
        id: "9",
        text: "I certainly feel useless at times.",
        isReverse: true,
      },
      {
        id: "10",
        text: "At times, I think I am no good at all.",
        isReverse: true,
      },
    ],
    options: [
      { id: "1", text: "Strongly Agree", score: 4 },
      { id: "2", text: "Agree", score: 3 },
      { id: "3", text: "Disagree", score: 2 },
      { id: "4", text: "Strongly Disagree", score: 1 },
    ],
    results: [
      {
        id: "1",
        range: [0, 18],
        text: "Low self-esteem",
        description:
          "Your score suggests a low level of self-esteem. You may tend to focus on your shortcomings and blame yourself for negative situations. This pattern can create a cycle that makes it harder to set goals and feel confident in your abilities. Developing self-compassion and learning to recognize your strengths may help improve your self-perception over time.",
      },
      {
        id: "2",
        range: [19, 22],
        text: "Unstable self-esteem",
        description:
          "Your self-esteem may fluctuate between confidence and self-doubt. Successes can temporarily boost how you feel about yourself, while setbacks may lower your confidence significantly. Building a more stable sense of self-worth that is less dependent on external outcomes could be beneficial.",
      },
      {
        id: "3",
        range: [23, 34],
        text: "Moderate self-esteem",
        description:
          "Your self-esteem is generally balanced. You are able to recognize both your strengths and weaknesses and maintain self-respect even during challenges. However, you may sometimes dwell on mistakes or be overly self-critical. Practicing acceptance and focusing on growth can help you move forward more easily.",
      },
      {
        id: "4",
        range: [35, 40],
        text: "High self-esteem",
        description:
          "Your score indicates a high level of self-esteem. You value yourself as a person and strive for personal growth in different areas of life. You are able to learn from difficulties while maintaining self-respect. This is a healthy and desirable level of self-esteem to maintain.",
      },
    ],
  },
];
