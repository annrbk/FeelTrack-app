import { Pressable, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import type { SignInValues } from "../types/signInValuesType";
import SignInInput from "../components/SignInInput";
import { useLogin } from "../hooks/useLogin";

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { login, error } = useLogin();

  const loginSubmit = async (values: SignInValues) => {
    try {
      const user = await login(values);
      if (user) {
        navigation.navigate("MainScreen");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <Formik<SignInValues>
      initialValues={{ email: "", password: "" }}
      onSubmit={loginSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Required"),
        password: Yup.string()
          .min(6, "This password is not valid. Please try again")
          .required("Required"),
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
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>
              Hi! Welcome back, you've been missed
            </Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <SignInInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="email"
              placeholder="Email"
            />
            <SignInInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="password"
              placeholder="Password"
            />
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Sign in</Text>
              </Pressable>
            </View>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.footerButton}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}
