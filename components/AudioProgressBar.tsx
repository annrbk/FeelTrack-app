import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { getStyles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import formatTime from "../utils/formatTime";
import { useAppStyle } from "../hooks/useAppStyle";
import { useAudio } from "../hooks/useAudio";
import useCategoryColor from "../hooks/useCategoryColor";

export default function AudioProgressBar() {
  const { currentTime, duration, seekTo } = usePlayer();
  const { styles, colors } = useAppStyle(getStyles);
  const currentCategory = useAudio();

  const trackColor = useCategoryColor(currentCategory);

  return (
    <View>
      <Slider
        style={styles.progressContainer}
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor={colors.textPrimary}
        minimumTrackTintColor={trackColor}
        maximumTrackTintColor={colors.textPrimary}
        onSlidingComplete={seekTo}
      ></Slider>
      <View style={styles.progressLabelContainer}>
        <Text style={styles.progressLabelText}>{formatTime(currentTime)}</Text>
        <Text style={styles.progressLabelText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
