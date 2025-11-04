import { Pressable, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useRegister } from "../hooks/useRegister";
import type { SignUpValues } from "../types/signUpValuesType";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

export default function SignUpScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { register, error } = useRegister();

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
          .min(2, "Name must be at least 2 characters")
          .max(30, "Name must be at most 30 characters")
          .required("Required"),
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Required"),
        password: Yup.string()
          .min(6, "This password is not valid. Please try again")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
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
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>
              Let's get you started — create your account below.
            </Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="name"
              placeholder="Name"
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="email"
              placeholder="Email"
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="password"
              placeholder="Password"
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              values={values}
              textField="confirmPassword"
              placeholder="Confirm password"
            />
            <Button handleSubmit={handleSubmit} />
          </View>
          <View style={styles.footerContainer}>
            <Text>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.footerButton}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}
