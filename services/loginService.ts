import axios from "axios";
import { API_URL } from "@env";
import { SignInValues } from "../types/signInValuesType";

export const loginUser = async (values: SignInValues) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/signin`,
      {
        email: values.email,
        password: values.password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Login failed";
      console.error("Login error:", message);
      throw new Error(message);
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
