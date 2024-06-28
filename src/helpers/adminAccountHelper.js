import axios from "axios";
import Cookies from "js-cookie";

export async function handleFecthAdminAccountData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/accounts/admin");
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

export async function handleAddAdminAccount(formDataAdmin) {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/register/admin", formDataAdmin);
    console.table(response.data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function handleEditAdminAccount(id, formDataAdmin) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/accounts/${id}`, formDataAdmin);
    // console.table(response.data);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleDeleteAdminAccount(id) {
  try {
    const token = Cookies.get("token");
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/accounts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching webinar data:", error);
    return false;
  }
}
