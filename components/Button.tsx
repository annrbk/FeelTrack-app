import { Pressable, View, Text } from "react-native";
import { getStyles } from "../styles/SignInScreen";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export type ButtonProps = {
  handleSubmit: () => void;
};

export default function Button({ handleSubmit }: ButtonProps) {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.buttonText}>
          {t("signUpScreen.signUpButtonText")}
        </Text>
      </Pressable>
    </View>
  );
}
