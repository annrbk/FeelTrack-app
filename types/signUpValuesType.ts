import { FormikProps } from "formik";

export type SignUpValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormInputProps = {
  textField: keyof SignUpValues;
  placeholder: string;
};

export type CustomFormikSignUp = Pick<
  FormikProps<SignUpValues>,
  "handleChange" | "handleBlur" | "touched" | "errors" | "values"
>;
