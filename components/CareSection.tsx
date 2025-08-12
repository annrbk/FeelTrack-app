import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/SelfCareScreen.styles";
import { CardItem } from "./ImageCard";
import ImageCard from "./ImageCard";

type CareSectionItem = {
  data: CardItem[];
  title: string;
  subtitle: string;
};

export default function CareSection({
  data,
  title,
  subtitle,
}: CareSectionItem) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ImageCard id={item.id} image={item.image} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
