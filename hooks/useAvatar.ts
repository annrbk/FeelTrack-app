import { useRef, useState } from "react";
import { updateAvatar } from "../services/avatarService";
import { useSession } from "../ctx";

export const useAvatar = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);
  const { updateUser } = useSession();

  const changeAvatar = async (avatar: string | null) => {
    if (!avatar || submissionInProgress.current) return false;
    submissionInProgress.current = true;
    setIsSubmitting(true);
    try {
      await updateAvatar(avatar);
      updateUser({ avatar });
      return true;
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return { avatar, setAvatar, changeAvatar, isSubmitting };
};
