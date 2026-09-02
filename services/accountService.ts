import apiClient, { isAxiosError } from "./apiClient";
import { updateUserData } from "../types/accountValuesType";

export const updateAccount = async (editedData: updateUserData) => {
  try {
    const response = await apiClient.put("/api/account/update", editedData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Account update error:", error);
      throw new Error("Account update failed");
    }
    throw new Error("Unexpected error");
  }
};

export const deleteAccount = async () => {
  try {
    const response = await apiClient.delete("/api/account/delete");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Account delete error:", error);
      throw new Error("Account delete failed");
    }
    throw new Error("Unexpected error");
  }
};
