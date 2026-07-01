import { Text, View } from "react-native";
import { getStyles } from "../styles/SelfCareScreen.styles";
import ImageCard from "./ImageCard";
import type { CareSectionItem } from "../types/careSection";
import { useAppStyle } from "../hooks/useAppStyle";

export default function CareSection({
  data,
  title,
  subtitle,
}: CareSectionItem) {
  const { styles } = useAppStyle(getStyles);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.grid}>
        {data.map((item) => (
          <ImageCard
            key={item.id}
            id={item.id}
            color={item.color}
            title={item.title}
            session={item.session}
          />
        ))}
      </View>
    </View>
  );
}
