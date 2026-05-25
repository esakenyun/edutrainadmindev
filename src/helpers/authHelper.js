import axios from "axios";
import Cookies from "js-cookie";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState } from "@/helpers/mockApi";

async function handleLoginWithApi(email, password) {
  try {
    const response = await axios.post(buildApiUrl("/auth/login"), {
      email,
      password,
    });

    if (response.status === 200) {
      const token = response.data.data.token;
      Cookies.set("token", token, { expires: 1 });
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }

  return false;
}

async function handleLoginWithMock(email, password) {
  const response = getStoreState().login({ email, password });

  if (!response.success) {
    return false;
  }

  Cookies.set("token", response.token, { expires: 1 });
  axios.defaults.headers.common.Authorization = `Bearer ${response.token}`;
  return true;
}

export async function handleLogin(email, password) {
  return isMockApiEnabled() ? handleLoginWithMock(email, password) : handleLoginWithApi(email, password);
}

async function handleLogoutWithApi() {
  try {
    setAuthorizationHeader();
    await axios.get(buildApiUrl("/auth/logout"));
    Cookies.remove("token");
    delete axios.defaults.headers.common.Authorization;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function handleLogoutWithMock() {
  Cookies.remove("token");
  delete axios.defaults.headers.common.Authorization;
  getStoreState().logout();
  return true;
}

export async function handleLogout() {
  return isMockApiEnabled() ? handleLogoutWithMock() : handleLogoutWithApi();
}
