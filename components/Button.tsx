import { ActivityIndicator, Pressable, View, Text } from "react-native";
import { getStyles } from "../styles/SignInScreen";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import type { ButtonProps } from "../types/buttonType";

export default function Button({
  handleSubmit,
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  const { styles, colors } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && !disabled && styles.buttonPressed,
          disabled && styles.buttonDisabled,
        ]}
        disabled={disabled || isLoading}
        onPress={() => {
          handleSubmit();
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.buttonText}>
            {t("signUpScreen.signUpButtonText")}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
