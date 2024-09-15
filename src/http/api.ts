import axios from "axios";
import { baseUrl } from "../utils/constants";
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const login = async (data: { email: string; password: string }) =>
  api.post("/crmuser/login-crm-user", data);
export const logout = async () => api.post("crmuser/logout-crm-user");
