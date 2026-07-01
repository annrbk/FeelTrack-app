import { TextInput, Text } from "react-native";
import { getStyles } from "../styles/SignInScreen";
import type { CustomFormikSignIn } from "../types/signInValuesType";
import { SignInInputProps } from "../types/signInValuesType";
import { useAppStyle } from "../hooks/useAppStyle";

export default function SignInInput(
  props: CustomFormikSignIn & SignInInputProps,
) {
  const {
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    textField,
    placeholder,
  } = props;
  const { styles } = useAppStyle(getStyles);
  return (
    <>
      {touched[textField] && errors[textField] && (
        <Text style={styles.error}>{errors[textField]}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          touched[textField] && errors[textField] && styles.inputError,
        ]}
        onChangeText={handleChange(textField)}
        onBlur={handleBlur(textField)}
        value={values[textField]}
        placeholder={placeholder}
      />
    </>
  );
}
