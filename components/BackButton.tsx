import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getStyles } from "../styles/BackButton.styles";
import { useAppStyle } from "../hooks/useAppStyle";

export default function BackButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { styles, colors } = useAppStyle(getStyles);

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color={colors.textSecondary} />
      </Pressable>
    </View>
  );
}
