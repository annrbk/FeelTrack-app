import { TextInput, Text } from "react-native";
import { getStyles } from "../styles/SignInScreen";
import type { FormInputProps } from "../types/signUpValuesType";
import type { CustomFormikSignUp } from "../types/signUpValuesType";
import { useAppStyle } from "../hooks/useAppStyle";

export default function FormInput(props: CustomFormikSignUp & FormInputProps) {
  const { styles } = useAppStyle(getStyles);
  const {
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    textField,
    placeholder,
  } = props;
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
