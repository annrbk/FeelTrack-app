import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getStyles } from "../styles/FirstScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function FirstScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <Text style={styles.title}>{t("firstScreen.title")}</Text>
        <Text style={styles.description}>{t("firstScreen.description")}</Text>
        <Pressable
          onPress={() => navigation.navigate("Authentication")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>{t("firstScreen.buttonText")}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
