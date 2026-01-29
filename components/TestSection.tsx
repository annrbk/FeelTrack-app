import { View, Text, FlatList } from "react-native";
import ImageCard from "./ImageCard";
import { styles } from "../styles/TestSection.styles";
import type { TestSectionItem } from "../types/tests";

export default function TestSection({
  data,
  title,
  subtitle,
}: TestSectionItem) {
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
            summaryQuestion={item.summaryQuestion}
          />
        )}
      />
    </View>
  );
}
