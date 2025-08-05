import { Pressable, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type SignInValues = {
  email: string;
  password: string;
};

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik<SignInValues>
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("MainScreen");
      }}
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
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={[
                styles.input,
                touched.email && errors.email && styles.inputError,
              ]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={[
                styles.input,
                touched.password && errors.password && styles.inputError,
              ]}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry
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
