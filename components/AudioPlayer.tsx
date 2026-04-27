import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/AudioPlayer.style";
import { usePlayer } from "../PlayerContext";
import { useAudio } from "../hooks/useAudio";
import ControlsButtons from "./ControlButtons";
import AudioProgressBar from "./AudioProgressBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AudioPlayer({
  toggleExpand,
}: {
  toggleExpand: () => void;
}) {
  const { currentTrack } = usePlayer();

  const currentCategory = useAudio();

  const insets = useSafeAreaInsets();

  if (!currentTrack) return null;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 16 }]}>
      <View style={styles.topHeader}>
        <Pressable style={styles.closeButton} onPress={toggleExpand}>
          <Ionicons name="chevron-down-outline" size={24} color="#000" />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.nowPlayingText}>Now Playing</Text>
        </View>
        <View style={styles.rightPart} />
      </View>
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
