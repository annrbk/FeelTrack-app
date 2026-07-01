import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";
import { useAppStyle } from "../hooks/useAppStyle";

export default function MiniControlButtons() {
  const { isPlaying, pauseTrack, resumeTrack } = usePlayer();
  const { styles, colors, isDark } = useAppStyle(getStyles);

  return (
    <>
      {isPlaying ? (
        <TouchableOpacity style={styles.playButton} onPress={pauseTrack}>
          <Ionicons
            name="pause-circle-outline"
            size={35}
            color={isDark ? colors.textSecondary : colors.btnPrimary}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playButton} onPress={resumeTrack}>
          <Ionicons
            name="play-circle-outline"
            size={35}
            color={isDark ? colors.textSecondary : colors.btnPrimary}
          />
        </TouchableOpacity>
      )}
    </>
  );
}
