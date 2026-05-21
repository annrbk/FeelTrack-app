import { useState } from "react";
import { updateAvatar } from "../services/avatarService";
import { useSession } from "../ctx";

export const useAvatar = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { updateUser } = useSession();

  const changeAvatar = async (avatar: string | null) => {
    if (!avatar) return;
    await updateAvatar(avatar);
    updateUser({ avatar });
  };

  return { avatar, setAvatar, changeAvatar };
};
