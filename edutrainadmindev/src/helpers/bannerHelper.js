import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchBannerData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/banners");

    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleAddBanner(formDataBanner) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/banners", formDataBanner);
    console.log(formDataBanner);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleDeleteBanner(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/banners/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching Banner data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}
