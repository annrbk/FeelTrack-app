import { Pressable, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { getStyles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import type { SignInValues } from "../types/signInValuesType";
import SignInInput from "../components/SignInInput";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLogin } from "../hooks/useLogin";

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { styles, colors } = useAppStyle(getStyles);
  const { loginSubmit, showPassword, setShowPassword, error } = useLogin();

  const { t } = useTranslation();

  return (
    <Formik<SignInValues>
      initialValues={{ email: "", password: "" }}
      onSubmit={loginSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(t("formik.emailInvalid"))
          .required(t("formik.required")),
        password: Yup.string()
          .min(6, t("formik.passwordMin"))
          .required(t("formik.required")),
      })}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>{t("signInScreen.title")}</Text>
            <Text style={styles.subtitle}>{t("signInScreen.subtitle")}</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <SignInInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="email"
              placeholder={t("signInScreen.emailPlaceholder")}
            />
            <View style={styles.passwordContainer}>
              <View style={{ width: "100%", position: "relative" }}>
                <SignInInput
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  values={values}
                  textField="password"
                  placeholder={t("signInScreen.passwordPlaceholder")}
                  secureTextEntry={!showPassword}
                />
                <Pressable
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color={colors.textPrimary}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>
                  {t("signInScreen.signInButtonText")}
                </Text>
              </Pressable>
            </View>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={styles.forgotPassword}>
                {t("signInScreen.forgotPassword")}
              </Text>
            </Pressable>
          </View>
          <View style={styles.footerContainer}>
            <Text>{t("signInScreen.signUpReminder")}</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.footerButton}>
                {t("signInScreen.signUpButtonText")}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}
