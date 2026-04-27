import { styles } from "../styles/SelfCareScreen.styles";
import { Image, View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import type { CardItem } from "../types/careSection";

export default function ImageCard({ id, image, title, session }: CardItem) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.imageWrapper}>
      <Pressable
        onPress={() => navigation.navigate("MeditationList", { id: id })}
      >
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.imageTitleContainer}>
          <Text style={styles.imageTitle}>{title}</Text>
        </View>
        <View style={styles.sessionContainer}>
          <Text>{session} sessions</Text>
        </View>
      </Pressable>
    </View>
  );
}
