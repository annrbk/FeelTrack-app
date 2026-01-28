import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";

export default function MiniControlButtons() {
  const { isPlaying, pauseTrack, resumeTrack } = usePlayer();

  return (
    <>
      {isPlaying ? (
        <TouchableOpacity style={styles.playButton} onPress={pauseTrack}>
          <Ionicons name="pause-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playButton} onPress={resumeTrack}>
          <Ionicons name="play-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      )}
    </>
  );
}
