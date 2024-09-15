import axios from "axios";
import { baseUrl } from "../utils/constants";

// Create an Axios instance
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Function to get cookie value
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    return cookieValue;
  }
  return undefined;
}

// Function to refresh access token
const refreshAccessToken = async () => {
  try {
    const response = await api.post("/crmuser/refreshaccesstoken-crm");
    const newAccessToken = response.data.result?.accessToken;
    console.log("Access token refreshed successfully", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token", error);
    throw error;
  }
};

// Request interceptor to add Authorization header
api.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("calling+++");
    console.log("error------", error);
    const originalRequest = error.config;

    if (
      error?.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      error?.response?.data?.message === "Invalid accesstoken"
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          // Update the cookie with the new access token
          document.cookie = `accessToken=${newAccessToken}; path=/`;

          // Update the Authorization header for the original request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Retry the original request with the new token
          return api(originalRequest);
        }
      } catch (err) {
        console.error("Error during token refresh retry", err);
        // If refresh token fails, clear tokens and return the error
        document.cookie = "accessToken=; path=/";
        document.cookie = "refreshToken=; path=/";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export const getBooks = async () => api.get("/books/get-all-books/10");

export default api;
