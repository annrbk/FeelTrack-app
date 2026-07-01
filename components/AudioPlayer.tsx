import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getStyles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import { useAudio } from "../hooks/useAudio";
import ControlsButtons from "./ControlButtons";
import AudioProgressBar from "./AudioProgressBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppStyle } from "../hooks/useAppStyle";

export default function AudioPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();

  const currentCategory = useAudio();

  const insets = useSafeAreaInsets();

  const { styles, colors, isDark } = useAppStyle(getStyles);

  if (!currentTrack) return null;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 16 }]}>
      <View style={styles.topHeader}>
        <Pressable style={styles.closeButton} onPress={toggleExpand}>
          <Ionicons
            name="chevron-down-outline"
            size={24}
            color={isDark ? colors.textPrimary : colors.textSecondary}
          />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.nowPlayingText}>Now playing</Text>
        </View>
        <View style={styles.rightPart} />
      </View>
      <View style={styles.headerContainer}>
        <View
          style={[
            styles.coverContainer,
            { backgroundColor: currentCategory?.color },
          ]}
        >
          <Ionicons
            name="musical-notes-outline"
            size={72}
            color={isDark ? colors.textPrimary : colors.textSecondary}
            style={{ opacity: 0.2 }}
          />
        </View>
        <Text style={styles.trackTitle}>{currentTrack?.title}</Text>
        <Text style={styles.trackCategory}>{currentCategory?.title}</Text>
      </View>
      <AudioProgressBar />
      <ControlsButtons />
    </View>
  );
}
