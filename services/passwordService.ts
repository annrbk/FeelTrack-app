import axios from "axios";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";
import { Passwords } from "../types/accountValuesType";

export const updatePassword = async (passwords: Passwords) => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.put(
      `${API_URL}/api/settings/password/update`,
      passwords,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Password update error:", error);
      throw new Error("Password update failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
