import apiClient, { isAxiosError } from "./apiClient";

export const updateAvatar = async (avatar: string) => {
  try {
    const response = await apiClient.patch("/api/account/avatar/update", {
      avatar,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Avatar update error:", error);
      throw new Error("Avatar update failed");
    }
    throw new Error("Unexpected error");
  }
};
