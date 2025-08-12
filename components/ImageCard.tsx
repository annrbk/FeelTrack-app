import { styles } from "../styles/SelfCareScreen.styles";
import { Image, View, Pressable, ImageSourcePropType } from "react-native";

export type CardItem = {
  id: string;
  image: ImageSourcePropType;
};

export default function ImageCard({ id, image }: CardItem) {
  return (
    <View style={styles.imageWrapper}>
      <Pressable onPress={() => console.log(`There is ${id}`)}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </Pressable>
    </View>
  );
}
