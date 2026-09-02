import apiClient, { isAxiosError } from "./apiClient";

export const addEmotionToUser = async (emotion: string, selectedDate: Date) => {
  try {
    const response = await apiClient.post("/api/emotions/add", {
      emotion,
      date: selectedDate.toISOString(),
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error adding emotion:", error);
      throw new Error("Adding emotion failed");
    }
    throw new Error("Unexpected error");
  }
};

export const getCurrentEmotions = async (selectedDate: Date) => {
  try {
    const response = await apiClient.get("/api/emotions/get", {
      params: { date: selectedDate.toISOString() },
    });
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error getting emotion:", error);
      throw new Error("Getting emotion failed");
    }
    throw new Error("Unexpected error");
  }
};

export const deleteEmotion = async (id: number) => {
  try {
    const response = await apiClient.delete(`/api/emotions/delete/${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error delete emotion:", error);
      throw new Error("Deleting emotion failed");
    }
    throw new Error("Unexpected error");
  }
};
