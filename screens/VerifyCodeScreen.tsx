import {
  ActivityIndicator,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/ForgotPasswordScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import { useForgotPassword } from "../hooks/useForgotPassword";
import BackButton from "../components/BackButton";
import { useRoute, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/types";

export default function VerifyCodeScreen() {
  const { styles, colors } = useAppStyle(getStyles);
  const { t } = useTranslation();
  const route = useRoute<RouteProp<RootStackParamList, "VerifyCode">>();
  const { email } = route.params;
  const { code, setCode, isLoading, requestCode, resendTimer, verifyCode } = useForgotPassword();

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
            <>
              <Text style={styles.description}>
                {t("forgotPassword.step1Description")}
              </Text>
              <TextInput
                style={styles.input}
                placeholder={t("forgotPassword.codePlaceholder")}
                placeholderTextColor={colors.textSecondary}
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
                maxLength={6}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => verifyCode(email, code)}
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
              <TouchableOpacity
                style={styles.resendButton}
                onPress={() => requestCode(email)}
                disabled={resendTimer > 0 || isLoading}
              >
                <Text
                  style={[
                    styles.resendText,
                    resendTimer > 0 && styles.resendTextDisabled,
                  ]}
                >
                  {resendTimer > 0
                    ? t("forgotPassword.resendCodeIn", {
                        seconds: resendTimer,
                      })
                    : t("forgotPassword.resendCode")}
                </Text>
              </TouchableOpacity>
            </>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
