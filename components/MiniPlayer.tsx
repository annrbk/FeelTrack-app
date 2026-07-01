import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";
import MiniProgressBar from "./MiniProgressBar";
import MiniControlButtons from "./MiniControlButtons";
import { useAudio } from "../hooks/useAudio";
import { useAppStyle } from "../hooks/useAppStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MiniPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();
  const currentCategory = useAudio();

  const { styles, colors, isDark } = useAppStyle(getStyles);

  if (!currentTrack) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSection} onPress={toggleExpand}>
        <View style={styles.leftSection}>
          <View
            style={[
              styles.miniCover,
              { backgroundColor: currentCategory?.color },
            ]}
          >
            <Ionicons
              name="musical-notes-outline"
              size={24}
              color={isDark ? colors.textPrimary : colors.textSecondary}
              style={{ opacity: 0.2 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{currentTrack?.title}</Text>
          <Text style={styles.subtitle}>{currentCategory?.title}</Text>
        </View>
      </TouchableOpacity>
      <MiniControlButtons />
      <MiniProgressBar />
    </View>
  );
}
