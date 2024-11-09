import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchOrderData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/orders");
    return response.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleFetchDetailOrderData(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/orders/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Order data:", error);
  }
}

export async function handleVerifyOrder(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + `/orders/${id}/verify`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching Order data:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

export async function handleAddOrder(formDataOrder) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/orders", formDataOrder);
    // console.log(formDataOrder);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleEditOrder(id, formDataOrder) {
  try {
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/orders/${id}`, formDataOrder);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

export async function handleDeleteOrder(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/orders/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching Order data:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}
