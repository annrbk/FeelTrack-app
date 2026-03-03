export const selfCriticismScale = [
  {
    id: "2",
    name: "Forms of Self-Criticism (FSCRS)",
    description:
      "Measures self-criticism and the ability to reassure oneself during difficulties.",
    instruction:
      "Please indicate how much each statement describes you when things go wrong for you.",
    questions: [
      {
        id: "1",
        text: "I am easily disappointed with myself.",
        subscale: "IS",
      },
      {
        id: "2",
        text: "There is a part of me that puts me down.",
        subscale: "IS",
      },
      {
        id: "3",
        text: "I am able to remind myself of positive things about myself.",
        subscale: "RS",
      },
      {
        id: "4",
        text: "I find it difficult to control my anger and frustration at myself.",
        subscale: "IS",
      },
      { id: "5", text: "I find it easy to forgive myself.", subscale: "RS" },
      {
        id: "6",
        text: "There is a part of me that feels I am not good enough.",
        subscale: "IS",
      },
      {
        id: "7",
        text: "I feel beaten down by my own self-critical thoughts.",
        subscale: "IS",
      },
      { id: "8", text: "I still like being me.", subscale: "RS" },
      {
        id: "9",
        text: "I have become so angry with myself that I want to hurt or injure myself.",
        subscale: "HS",
      },
      {
        id: "10",
        text: "I have a sense of disgust with myself.",
        subscale: "HS",
      },
      {
        id: "11",
        text: "I can still feel lovable and acceptable.",
        subscale: "RS",
      },
      { id: "12", text: "I stop caring about myself.", subscale: "HS" },
      { id: "13", text: "I find it easy to like myself.", subscale: "RS" },
      {
        id: "14",
        text: "I remember and dwell on my failings.",
        subscale: "IS",
      },
      { id: "15", text: "I call myself names.", subscale: "HS" },
      {
        id: "16",
        text: "I am gentle and supportive with myself.",
        subscale: "RS",
      },
      {
        id: "17",
        text: "I can't accept failures and setbacks without feeling inadequate.",
        subscale: "IS",
      },
      {
        id: "18",
        text: "I think I deserve my self-criticism.",
        subscale: "IS",
      },
      {
        id: "19",
        text: "I am able to care and look after myself.",
        subscale: "RS",
      },
      {
        id: "20",
        text: "There is a part of me that wants to get rid of the bits I don't like.",
        subscale: "IS",
      },
      { id: "21", text: "I encourage myself for the future.", subscale: "RS" },
      { id: "22", text: "I do not like being me.", subscale: "HS" },
    ],
    options: [
      { id: "1", text: "Not at all like me", score: 0 },
      { id: "2", text: "A little bit like me", score: 1 },
      { id: "3", text: "Moderately like me", score: 2 },
      { id: "4", text: "Quite a bit like me", score: 3 },
      { id: "5", text: "Extremely like me", score: 4 },
    ],
    results: [
      {
        id: "IS1",
        subscale: "IS",
        range: [0, 12],
        text: "Low self-criticism",
        description:
          "You generally experience few self-critical thoughts. You seem comfortable with yourself and handle setbacks without harsh self-judgment.",
      },
      {
        id: "IS2",
        subscale: "IS",
        range: [13, 24],
        text: "Moderate self-criticism",
        description:
          "You sometimes struggle with self-critical thoughts. While manageable, they may affect your mood or confidence. Practicing self-compassion can help you cope better.",
      },
      {
        id: "IS3",
        subscale: "IS",
        range: [25, 36],
        text: "High self-criticism",
        description:
          "You frequently experience strong self-critical thoughts. This may impact your well-being or motivation. Learning to be gentler with yourself and seeking support can be beneficial.",
      },

      // Hated Self (HS)
      {
        id: "HS1",
        subscale: "HS",
        range: [0, 6],
        text: "Low self-hate",
        description:
          "You rarely experience thoughts of self-hate. You seem able to accept yourself and manage negative feelings constructively.",
      },
      {
        id: "HS2",
        subscale: "HS",
        range: [7, 13],
        text: "Moderate self-hate",
        description:
          "You sometimes feel strong negative feelings toward yourself. Being aware of these moments and practicing self-kindness can help reduce their intensity.",
      },
      {
        id: "HS3",
        subscale: "HS",
        range: [14, 20],
        text: "High self-hate",
        description:
          "You frequently experience harsh self-hate. This can affect your mental health and daily functioning. Seeking professional support and self-compassion exercises is recommended.",
      },

      // Reassuring Self (RS)
      {
        id: "RS1",
        subscale: "RS",
        range: [0, 10],
        text: "Low self-reassurance",
        description:
          "You find it challenging to reassure or comfort yourself. Developing self-compassion skills may help you cope better with setbacks.",
      },
      {
        id: "RS2",
        subscale: "RS",
        range: [11, 21],
        text: "Moderate self-reassurance",
        description:
          "You can sometimes comfort or reassure yourself, but may struggle in stressful situations. Practicing supportive self-talk can enhance your resilience.",
      },
      {
        id: "RS3",
        subscale: "RS",
        range: [22, 32],
        text: "High self-reassurance",
        description:
          "You are good at reassuring and supporting yourself, even when things go wrong. This helps maintain emotional balance and cope effectively with challenges.",
      },
    ],
  },
];
