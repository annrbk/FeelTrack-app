import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { styles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import formatTime from "../utils/formatTime";
import { ThemeColors } from "../constants/theme";

export default function AudioProgressBar() {
  const { currentTime, duration, seekTo } = usePlayer();
  return (
    <View>
      <Slider
        style={styles.progressContainer}
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor={ThemeColors.textPrimary}
        minimumTrackTintColor={ThemeColors.btnPrimary}
        maximumTrackTintColor={ThemeColors.textSecondary}
        onSlidingComplete={seekTo}
      ></Slider>
      <View style={styles.progressLabelContainer}>
        <Text style={styles.progressLabelText}>{formatTime(currentTime)}</Text>
        <Text style={styles.progressLabelText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
