import axios from "axios";
import Cookies from "js-cookie";

export function isMockApiEnabled() {
  return process.env.NEXT_PUBLIC_USE_MOCK_API !== "false";
}

export function setAuthorizationHeader() {
  const token = Cookies.get("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return token;
}

export function buildApiUrl(path) {
  return `${process.env.NEXT_PUBLIC_API_URL || ""}${path}`;
}
