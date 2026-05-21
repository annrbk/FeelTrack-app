import axios from "axios";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

export const updateAvatar = async (avatar: string) => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.patch(
      `${API_URL}/api/account/avatar/update`,
      { avatar },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Avatar update error:", error);
      throw new Error("Avatar update failed");
    } else {
      console.error(error);
      throw new Error("Unexpected error");
    }
  }
};
