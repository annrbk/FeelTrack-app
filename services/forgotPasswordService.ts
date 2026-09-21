import axios from "axios";

export const requestPasswordReset = async (email: string): Promise<void> => {
  try {
    await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/api/auth/forgot-password`,
      { email },
    );
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? (error.response?.data?.message ?? "Something went wrong")
      : "Something went wrong";
    throw new Error(message);
  }
};

export const confirmPasswordReset = async (
  email: string,
  code: string,
  newPassword: string,
): Promise<void> => {
  try {
    await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/api/auth/reset-password`,
      {
        email,
        code,
        newPassword,
      },
    );
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? (error.response?.data?.message ?? "Something went wrong")
      : "Something went wrong";
    throw new Error(message);
  }
};
