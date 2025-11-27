export type Emotion = {
  label: string;
  emoji: string;
};

export type EmotionModalProps = {
  visible: boolean;
  emotion: Emotion;
  onClose: () => void;
  addEmotion: (emotion: Emotion) => void;
};
