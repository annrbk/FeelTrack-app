import { User } from "./userType";

export type Emotion = {
  label: string;
  emoji: string;
};

export type EmotionFromDB = {
  id: number;
  label: string;
  userId: number;
  createdAt: string;
};

export type EmotionModalProps = {
  visible: boolean;
  emotion: Emotion;
  onClose: () => void;
  addEmotion: (emotion: Emotion) => void;
};

export type TodayStatisticsProps = {
  todayEmotions: EmotionFromDB[];
};

export type EmotionsSectionProps = {
  user: User | null;
  emotion: Emotion | null;
  setEmotion: (emotion: Emotion) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
  onCloseEmotionModal: () => void;
  addEmotion: (emotion: Emotion) => Promise<void>;
};
