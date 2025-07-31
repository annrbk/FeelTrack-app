import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/FirstScreen.styles";

export default function FirstScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.content}>
        <Text style={styles.title}>
          Track your emotional well-being every day.
        </Text>
        <Text style={styles.description}>
          Log your mood, write down your thoughts, take short tests, and
          discover ways to support yourself when you need it most
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Authentication")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
}
