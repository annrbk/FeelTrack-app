import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/BackButton.styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

export default function BackButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color="#1c3249" />
      </Pressable>
    </View>
  );
}
