import apiClient, { isAxiosError } from "./apiClient";

export const getEmotionsWithDates = async () => {
  try {
    const response = await apiClient.get(
      "/api/statistics/get-emotions-with-dates",
    );
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error getting emotions with dates:", error);
      throw new Error("Getting emotions with dates failed");
    }
    throw new Error("Unexpected error");
  }
};
