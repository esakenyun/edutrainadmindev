import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchFAQData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/faqs");
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleAddFAQ(formDataFAQ) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/faqs", formDataFAQ);
    // console.log(formDataFAQ);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleEditFAQ(id, formDataFAQ) {
  try {
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/faqs/${id}`, formDataFAQ);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleDeleteFAQ(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/faqs/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}
