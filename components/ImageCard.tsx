import { getStyles } from "../styles/SelfCareScreen.styles";
import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import type { CardItem } from "../types/careSection";
import { useAppStyle } from "../hooks/useAppStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ImageCard({ id, color, title, session }: CardItem) {
  const { styles, colors, isDark } = useAppStyle(getStyles);
  const cardBackgroundColor = colors[color as keyof typeof colors] || color;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View
      style={[styles.imageWrapper, { backgroundColor: cardBackgroundColor }]}
    >
      <Pressable
        onPress={() => navigation.navigate("MeditationList", { id: id })}
      >
        <View style={styles.categoryContainer}>
          <View style={styles.informContainer}>
            <Text style={styles.imageTitle}>{title}</Text>
            <Text style={styles.sessionText}>{session}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons
              name="play-outline"
              size={28}
              color={isDark ? colors.textPrimary : colors.textSecondary}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
