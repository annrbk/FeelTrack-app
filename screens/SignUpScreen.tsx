import { Pressable, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { getStyles } from "../styles/SignInScreen";
import { useRegister } from "../hooks/useRegister";
import type { SignUpValues } from "../types/signUpValuesType";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUpScreen() {
  const {
    error,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    submitForm,
  } = useRegister();

  const { styles, colors } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <Formik<SignUpValues>
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      onSubmit={submitForm}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, t("formik.nameMin"))
          .max(30, t("formik.nameMax"))
          .required(t("formik.required")),
        email: Yup.string()
          .email(t("formik.emailInvalid"))
          .required(t("formik.required")),
        password: Yup.string()
          .min(6, t("formik.passwordMin"))
          .required(t("formik.required")),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], t("formik.matchPassword"))
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
            <Text style={styles.title}>{t("signUpScreen.title")}</Text>
            <Text style={styles.subtitle}>{t("signUpScreen.subtitle")}</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="name"
              placeholder={t("signUpScreen.namePlaceholder")}
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="email"
              placeholder={t("signUpScreen.emailPlaceholder")}
            />
            <View style={styles.passwordContainer}>
              <View style={{ width: "100%", position: "relative" }}>
                <FormInput
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  values={values}
                  textField="password"
                  placeholder={t("signUpScreen.passwordPlaceholder")}
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
            <View style={styles.passwordContainer}>
              <View style={{ width: "100%", position: "relative" }}>
                <FormInput
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  values={values}
                  textField="confirmPassword"
                  placeholder={t("signUpScreen.confirmPasswordPlaceholder")}
                  secureTextEntry={!showConfirmPassword}
                />
                <Pressable
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={22}
                    color={colors.textPrimary}
                  />
                </Pressable>
              </View>
            </View>
            <Button handleSubmit={handleSubmit} />
          </View>
          <View style={styles.footerContainer}>
            <Text>{t("signUpScreen.signInReminder")}</Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.footerButton}>
                {t("signUpScreen.signInButtonText")}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}
