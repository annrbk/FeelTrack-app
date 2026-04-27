import { Text, View } from "react-native";
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
      <View style={styles.grid}>
        {data.map((item) => (
          <ImageCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            session={item.session}
          />
        ))}
      </View>
    </View>
  );
}
