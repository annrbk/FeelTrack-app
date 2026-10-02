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
      <TouchableOpacity
        style={[styles.controlButton, isShuffled && styles.controlButtonActive]}
        onPress={shuffleQueue}
      >
        <Ionicons
          name={isShuffled ? "shuffle" : "shuffle-outline"}
          size={30}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={playPrevious}>
        <Ionicons
          name="play-skip-back-outline"
          size={30}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      {isPlaying ? (
        <TouchableOpacity style={styles.mainControlButton} onPress={pauseTrack}>
          <Ionicons name="pause" size={34} color={colors.textPrimary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.mainControlButton} onPress={resumeTrack}>
          <Ionicons name="play" size={34} color={colors.textPrimary} />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.controlButton} onPress={playNext}>
        <Ionicons
          name="play-skip-forward-outline"
          size={30}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.controlButton, repeatMode === "one" && styles.controlButtonActive]}
        onPress={toggleRepeat}
      >
        <Ionicons
          name={repeatMode === "one" ? "repeat" : "repeat-outline"}
          size={30}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
}
