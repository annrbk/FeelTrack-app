import axios from "axios";
import { API_URL } from "@env";
import { updateUserData } from "../types/accountValuesType";
import * as SecureStore from "expo-secure-store";

export const updateAccount = async (editedData: updateUserData) => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.put(
      `${API_URL}/api/account/update`,
      editedData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Account update error:", error);
      throw new Error("Account update failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
