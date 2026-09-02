import apiClient, { isAxiosError } from "./apiClient";
import { Passwords } from "../types/accountValuesType";

export const updatePassword = async (passwords: Passwords) => {
  try {
    const response = await apiClient.put(
      "/api/settings/password/update",
      passwords,
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Password update error:", error);
      throw new Error("Password update failed");
    }
    throw new Error("Unexpected error");
  }
};
