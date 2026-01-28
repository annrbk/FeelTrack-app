import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/MiniPlayer.styles";
import { usePlayer } from "../PlayerContext";
import MiniProgressBar from "./MiniProgressBar";
import MiniControlButtons from "./MiniControlButtons";
import { useAudio } from "../hooks/useAudio";

export default function MiniPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();
  const currentCategory = useAudio();

  if (!currentTrack) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSection} onPress={toggleExpand}>
        <View style={styles.leftSection}>
          <Image
            style={styles.image}
            source={require("../assets/meditation/1.jpg")}
          ></Image>
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
