import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchCategoryData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/categories");
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

export async function handleAddCategory(name) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/categories", name);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}