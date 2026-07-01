import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import { useAppStyle } from "../hooks/useAppStyle";

export default function ControlsButtons() {
  const { styles, colors } = useAppStyle(getStyles);

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
          color={isShuffled ? colors.btnControl : colors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={playPrevious}>
        <Ionicons name="play-skip-back" size={38} color={colors.textPrimary} />
      </TouchableOpacity>
      {isPlaying ? (
        <TouchableOpacity onPress={pauseTrack}>
          <Ionicons name="pause-circle" size={78} color={colors.textPrimary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={resumeTrack}>
          <Ionicons name="play-circle" size={78} color={colors.textPrimary} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={playNext}>
        <Ionicons
          name="play-skip-forward"
          size={38}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleRepeat}>
        <Ionicons
          name="repeat-outline"
          size={38}
          color={repeatMode === "off" ? colors.textPrimary : colors.btnControl}
        />
      </TouchableOpacity>
    </View>
  );
}
