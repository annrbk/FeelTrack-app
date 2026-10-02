import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";
import MiniProgressBar from "./MiniProgressBar";
import MiniControlButtons from "./MiniControlButtons";
import { useAudio } from "../hooks/useAudio";
import { useAppStyle } from "../hooks/useAppStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import useCategoryColor from "../hooks/useCategoryColor";

export default function MiniPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();
  const currentCategory = useAudio();
  const categoryColor = useCategoryColor(currentCategory);

  const { styles, colors } = useAppStyle(getStyles);

  if (!currentTrack) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSection} onPress={toggleExpand}>
        <View style={[styles.miniCover, { backgroundColor: categoryColor }]}>
          <Ionicons
            name="musical-notes-outline"
            size={34}
            color={colors.textSecondary}
            style={{ opacity: 0.1 }}
          />
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
