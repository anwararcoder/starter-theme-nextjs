import { getLanguage, getToken } from "@/utils/cookiesFunctions";
import axios from "axios";

// Create a clean instance
export const AxiosAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

// Request Interceptor
AxiosAPI.interceptors.request.use(
  async (config) => {
    // Handle Language
    const langCookie = await getLanguage();
    const lang = langCookie?.value || "en";
    config.headers["Accept-Language"] = lang;

    // Handle Authorization
    const tokenCookie = await getToken();
    const token = tokenCookie?.value;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
AxiosAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);
