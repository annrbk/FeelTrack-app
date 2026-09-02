import axios, { isAxiosError } from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";
import { triggerSignOut } from "./authSignOut";

const apiClient = axios.create({ baseURL: API_URL });

apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("session");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      triggerSignOut();
    }
    return Promise.reject(error);
  },
);

export { isAxiosError };
export default apiClient;
