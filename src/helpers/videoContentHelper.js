import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchVideoContentData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/videos");
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleAddVideoContent(formDataVideoContent) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/videos", formDataVideoContent);
    // console.log(formDataVideoContent);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.error || "An error occurred" };
  }
}

export async function handleEditVideoContent(id, formDataVideoContent) {
  try {
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/videos/${id}`, formDataVideoContent);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.error || "An error occurred" };
  }
}

export async function handleDeleteVideoContent(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/videos/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching Video Content data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}
