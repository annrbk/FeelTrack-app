import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getStyles } from "../styles/AuthScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function AuthScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("authScreen.title")}</Text>
      <Text style={styles.subtitle}>{t("authScreen.subtitle")}</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>
            {t("authScreen.signInButtonText")}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>
            {t("authScreen.signUpButtonText")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
