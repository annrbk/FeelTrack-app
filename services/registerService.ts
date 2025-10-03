import axios from "axios";
import { API_URL } from "@env";
import type { SignUpValues } from "../types/signUpValuesType";

export const registerUser = async (values: SignUpValues) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/signup`,
      {
        name: values.name,
        email: values.email,
        password: values.password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
      throw new Error(error.response?.data?.message || "Registration failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
