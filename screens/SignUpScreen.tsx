import { Pressable, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/SignInScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type SignUpValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik<SignUpValues>
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      onSubmit={(values) => console.log(values)}
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
            <Text style={styles.title}>Create account</Text>
            <Text style={styles.subtitle}>
              Let's get you started — create your account below.
            </Text>
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <TextInput
              style={[
                styles.input,
                touched.name && errors.name && styles.inputError,
              ]}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Name"
            />
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
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <TextInput
              style={[
                styles.input,
                touched.confirmPassword &&
                  errors.confirmPassword &&
                  styles.inputError,
              ]}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              placeholder="Confirm password"
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Sign up</Text>
              </Pressable>
            </View>
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
