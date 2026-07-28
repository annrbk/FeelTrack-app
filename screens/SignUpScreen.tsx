import { Pressable, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { getStyles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useRegister } from "../hooks/useRegister";
import type { SignUpValues } from "../types/signUpValuesType";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function SignUpScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { register, error } = useRegister();

  const { styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  const submitForm = async (values: SignUpValues) => {
    try {
      const newUser = await register(values);
      if (newUser) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

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
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="password"
              placeholder={t("signUpScreen.passwordPlaceholder")}
              secureTextEntry={true}
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="confirmPassword"
              placeholder={t("signUpScreen.confirmPasswordPlaceholder")}
            />
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
