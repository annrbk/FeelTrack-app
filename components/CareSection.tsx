import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/SelfCareScreen.styles";
import ImageCard from "./ImageCard";
import type { CareSectionItem } from "../types/careSection";

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
        renderItem={({ item }) => (
          <ImageCard
            id={item.id}
            image={item.image}
            title={item.title}
            session={item.session}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
