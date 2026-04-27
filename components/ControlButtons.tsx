import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";

export default function ControlsButtons() {
  const {
    isPlaying,
    repeatMode,
    isShuffled,
    resumeTrack,
    pauseTrack,
    playNext,
    playPrevious,
    toggleRepeat,
    shuffleQueue,
  } = usePlayer();

  return (
    <View style={styles.musicControls}>
      <TouchableOpacity onPress={shuffleQueue}>
        <Ionicons
          name="shuffle-outline"
          size={38}
          color={isShuffled ? "pink" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={playPrevious}>
        <Ionicons name="play-skip-back" size={38} color="black" />
      </TouchableOpacity>
      {isPlaying ? (
        <TouchableOpacity onPress={pauseTrack}>
          <Ionicons name="pause-circle" size={78} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={resumeTrack}>
          <Ionicons name="play-circle" size={78} color="black" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={playNext}>
        <Ionicons name="play-skip-forward" size={38} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleRepeat}>
        <Ionicons
          name="repeat-outline"
          size={38}
          color={repeatMode === "off" ? "black" : "pink"}
        />
      </TouchableOpacity>
    </View>
  );
}
