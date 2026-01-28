import { careData } from "../constants/careData";
import { usePlayer } from "../PlayerContext";

export const useAudio = () => {
  const { currentTrack } = usePlayer();

  const currentCategory = careData.find(
    (item) => item.id === currentTrack?.categoryId
  );
  return currentCategory;
};
