import { View } from "react-native";
import { getStyles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";
import { useAppStyle } from "../hooks/useAppStyle";

export default function MiniProgressBar() {
  const { currentTime, duration } = usePlayer();
  const progress = (currentTime / duration) * 100;
  const { styles, colors, isDark } = useAppStyle(getStyles);

  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          {
            width: `${progress}%`,
            backgroundColor: isDark ? colors.textSecondary : colors.btnPrimary,
          },
        ]}
      ></View>
    </View>
  );
}
