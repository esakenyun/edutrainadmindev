import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchWorkshopData() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/workshops");
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleFetchDetailWorkshopData(id) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/workshops/${id}`);
    return (await response.json())["data"];
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

export async function handleFetchRegisteredWorkshopUsers(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/workshops/${id}/registered-users`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

export async function handleAddWorkshop(formDataWorkshop) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/workshops", formDataWorkshop, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(formDataWorkshop);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleOpenModalDetailWorkshop(id) {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/workshops/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workshop data: ", error);
  }
}

export async function handleEditWorkshop(id, formDataWorkshop) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/workshops/${id}`, formDataWorkshop, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(formDataWorkshop);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleDeleteWorkshop(id) {
  try {
    const token = Cookies.get("token");
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/workshops/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log("Error fetching workshop data: ", error);
  }
}
