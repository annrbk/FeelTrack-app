import {
  addEmotionToUser,
  getCurrentEmotions,
  deleteEmotion,
} from "../services/emotionService";
import { useState } from "react";
import { useSession } from "../ctx";
import type { Emotion, EmotionFromDB } from "../types/emotionTypes";

export const useEmotion = () => {
  const { user, isLoading } = useSession();
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [todayEmotions, setTodayEmotions] = useState<EmotionFromDB[]>([]);

  const addEmotion = async (emotion: Emotion) => {
    if (!emotion) return;

    try {
      await addEmotionToUser(emotion.label);
      setModal(false);
      setSuccessModal(true);
      getEmotions();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const getEmotions = async () => {
    try {
      const emotions = await getCurrentEmotions();
      setTodayEmotions(emotions);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const deleteTodayEmotion = async (id: number) => {
    try {
      await deleteEmotion(id);
      const updatedEmotions = todayEmotions.filter(
        (emotion) => emotion.id !== id
      );
      setTodayEmotions(updatedEmotions);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onCloseEmotionModal = () => {
    setModal(false);
  };

  const onCloseSuccessModal = () => {
    setSuccessModal(false);
  };

  return {
    user,
    isLoading,
    emotion,
    setEmotion,
    setModal,
    modal,
    addEmotion,
    successModal,
    onCloseEmotionModal,
    onCloseSuccessModal,
    getEmotions,
    todayEmotions,
    deleteTodayEmotion,
  };
};
