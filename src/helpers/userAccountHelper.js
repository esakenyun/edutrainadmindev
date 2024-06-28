import axios from "axios";
import Cookies from "js-cookie";

export async function handleFecthUserAccountData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/accounts?role=USER");
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

export async function handleFetchDetailUserData(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/accounts/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export async function handleAddUserAccount(formDataUser) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/accounts", formDataUser);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function handleDeleteUserAccount(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/accounts/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching User Account data:", error);
    return false;
  }
}
