import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/ForgotPasswordScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import { useForgotPassword } from "../hooks/useForgotPassword";
import BackButton from "../components/BackButton";
import { useRoute, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/types";

export default function ResetPasswordScreen() {
  const { styles, colors } = useAppStyle(getStyles);
  const { t } = useTranslation();
  const route = useRoute<RouteProp<RootStackParamList, "ResetPassword">>();
  const { email, code } = route.params;
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    resetPassword,
  } = useForgotPassword();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>
          {t("forgotPassword.headerForgotPassword")}
        </Text>
      </View>
      <KeyboardAvoidingView behavior={"height"} style={styles.keyboardView}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.mainCard}>
            <Text style={styles.description}>
              {t("forgotPassword.step3Description")}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={t("forgotPassword.newPasswordPlaceholder")}
              placeholderTextColor={colors.textSecondary}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder={t("forgotPassword.confirmPasswordPlaceholder")}
              placeholderTextColor={colors.textSecondary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => resetPassword(email, code)}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <Text style={styles.buttonText}>
                  {t("forgotPassword.sendCode")}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
