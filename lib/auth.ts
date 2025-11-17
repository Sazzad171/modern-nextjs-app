import { login } from "@/api/api";
import { LoginType } from "@/types/interface";
import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";

// Set token
export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7, sameSite: "lax" });
};

// Get token
export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

// Remove token
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

// Login helper
export const handleLogin = async (payload: LoginType) => {
  const response = await login(payload);
  setToken(response.data.access);
  return response.data;
};

// Logout helper
export const handleLogout = () => {
  removeToken();
};
