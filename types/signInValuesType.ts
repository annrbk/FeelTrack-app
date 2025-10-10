import { FormikProps } from "formik";

export type SignInValues = {
  email: string;
  password: string;
};

export type SignInInputProps = {
  textField: keyof SignInValues;
  placeholder: string;
};

export type CustomFormikSignIn = Pick<
  FormikProps<SignInValues>,
  "handleChange" | "handleBlur" | "touched" | "errors" | "values"
>;
