import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getStyles } from "../styles/FirstScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";

export default function FirstScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { styles } = useAppStyle(getStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.content}>
        <Text style={styles.title}>
          Track your emotional well-being every day.
        </Text>
        <Text style={styles.description}>
          Log your daily mood, listen to relaxing meditations, and track your
          emotional journey in the calendar
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
