import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import { meditations } from "../constants/meditations";
import { getStyles } from "../styles/MeditationList.styles";
import { usePlayer } from "../PlayerContext";
import { useEffect } from "react";
import { careData } from "../constants/careData";
import formatTime from "../utils/formatTime";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";

export default function MeditationListScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "MeditationList">;
}) {
  const { id } = route.params;
  const player = usePlayer();

  const { styles, colors } = useAppStyle(getStyles);

  const filteredMeditations = meditations.filter((m) => m.categoryId === id);
  const currentCategory = careData.find((careItem) => careItem.id === id);

  const miniPlayerHeight = player.currentTrack ? 70 : 0;

  const meditationBg = currentCategory?.color || colors.bgCalm;

  useEffect(() => {
    player.setQueue(filteredMeditations);
  }, [id]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <View style={[styles.header, { backgroundColor: meditationBg }]}>
          <View style={styles.headerTextContainer}>
            <Text key={id} style={styles.headerTitle}>
              {currentCategory?.title}
            </Text>
            <Text style={styles.headerSubtitle}>
              {filteredMeditations.length} sessions
            </Text>
          </View>
        </View>
        <FlatList
          data={filteredMeditations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.listContainer,
            { paddingBottom: miniPlayerHeight },
          ]}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => player.playTrack(item)}
              activeOpacity={0.7}
            >
              <View style={styles.listItem}>
                <Text style={styles.trackNumber}>{index + 1}</Text>
                <View style={styles.trackInfo}>
                  <Text style={styles.trackTitle}>{item.title}</Text>
                  <Text key={id} style={styles.trackAlbum}>
                    {currentCategory?.title}
                  </Text>
                </View>
                <Text style={styles.trackDuration}>
                  <Text>{formatTime(item.duration)}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
