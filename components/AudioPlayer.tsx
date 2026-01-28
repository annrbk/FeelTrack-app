import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import { useAudio } from "../hooks/useAudio";
import ControlsButtons from "./ControlButtons";
import AudioProgressBar from "./AudioProgressBar";

export default function AudioPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();

  if (!currentTrack) return null;

  const currentCategory = useAudio();

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeButton} onPress={toggleExpand}>
        <Ionicons name="chevron-down-outline" size={24} color="#000" />
      </Pressable>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../assets/meditation/1.jpg")}
          resizeMode="cover"
        ></Image>
        <Text style={styles.trackTitle}>{currentTrack?.title}</Text>
        <Text style={styles.trackCategory}>{currentCategory?.title}</Text>
      </View>
      <AudioProgressBar />
      <ControlsButtons />
    </View>
  );
}
