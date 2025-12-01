import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

export const addEmotionToUser = async (emotion: string) => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.post(
      `${API_URL}/api/emotions/add`,
      { emotion },
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
      console.error("Error adding emotion:", error);
      throw new Error("Adding emotion failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};

export const getCurrentEmotions = async () => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await axios.get(`${API_URL}/api/emotions/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error getting emotion:", error);
      throw new Error("Getting emotion failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
