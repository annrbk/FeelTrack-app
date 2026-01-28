import { View } from "react-native";
import { styles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";

export default function MiniProgressBar() {
  const { currentTime, duration } = usePlayer();
  const progress = (currentTime / duration) * 100;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
    </View>
  );
}
