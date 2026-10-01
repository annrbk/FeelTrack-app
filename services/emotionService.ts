import apiClient, { isAxiosError } from "./apiClient";

export const addEmotionToUser = async (emotion: string, selectedDate: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkDate = new Date(selectedDate);
  checkDate.setHours(0, 0, 0, 0);

  if (checkDate > today) {
    throw new Error("You cannot add an emotion for a future date.");
  }

  const now = new Date();
  const dateWithCurrentTime = new Date(selectedDate);

  dateWithCurrentTime.setHours(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds(),
  );
  try {
    const response = await apiClient.post("/api/emotions/add", {
      emotion,
      date: dateWithCurrentTime.toISOString(),
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
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
      throw new Error("Deleting emotion failed");
    }
    throw new Error("Unexpected error");
  }
};
