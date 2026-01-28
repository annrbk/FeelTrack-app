import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import { meditations } from "../constants/meditations";
import { styles } from "../styles/MeditationList.styles";
import { usePlayer } from "../PlayerContext";
import { useEffect } from "react";
import { careData } from "../constants/careData";
import formatTime from "../utils/formatTime";

export default function MeditationListScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "MeditationList">;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { id } = route.params;
  const player = usePlayer();

  const filteredMeditations = meditations.filter((m) => m.categoryId === id);
  const currentCategory = careData.find((careItem) => careItem.id === id);

  useEffect(() => {
    player.setQueue(filteredMeditations);
  }, [id]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
        >
          <Text>Back</Text>
        </Pressable>
        <FlatList
          data={filteredMeditations}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/meditation/2.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.headerTextContainer}>
                <Text key={id} style={styles.headerTitle}>
                  {currentCategory?.title}
                </Text>

                <Text style={styles.headerSubtitle}>
                  {filteredMeditations.length} tracks
                </Text>
              </View>
            </View>
          }
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
