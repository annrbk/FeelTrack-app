import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";

export default function ControlsButtons() {
  const { isPlaying, resumeTrack, pauseTrack, playNext, playPrevious } =
    usePlayer();

  return (
    <View style={styles.musicControls}>
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
    </View>
  );
}
