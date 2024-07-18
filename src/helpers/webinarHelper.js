import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchWebinarData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/webinars");
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleFetchDetailWebinarData(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/webinars/${id}`);
    return (await response.json())["data"];
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

export async function handleFetchRegisteredWebinarUsers(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/webinars/${id}/registered-users`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

export async function handleAddWebinar(formDataWebinar) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/webinars", formDataWebinar);
    console.log(formDataWebinar);
    console.log(response);
    return response;
  } catch (error) {
    console.log(formDataWebinar);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleEditWebinar(id, formDataWebinar) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/webinars/${id}`, formDataWebinar, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(formDataWebinar);
    console.log(response);
    return response;
  } catch (error) {
    console.log(formDataWebinar);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleOpenModalDetailWebinar(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/webinars/${id}`);
    console.log(response);
    return (await response.json())["data"];
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

export async function handleDeleteWebinar(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/webinars/${id}`);
    console.log(response);
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}
