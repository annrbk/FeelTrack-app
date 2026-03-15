import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

export const getEmotionsWithDates = async () => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.get(
      `${API_URL}/api/statistics/get-emotions-with-dates`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error getting emotions with dates:", error);
      throw new Error("Getting emotions with dates failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
