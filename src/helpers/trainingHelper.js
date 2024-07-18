import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchTrainingData() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/trainings");
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

export async function handleFetchDetailTrainingData(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

export async function handleFetchRegisteredTrainingUsers(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}/registered-users`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

export async function handleAddTraining(formDataTraining) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/trainings", formDataTraining, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/trainings", formDataTraining, );
    console.log(formDataTraining);
    console.log(response);
    return response;
  } catch (error) {
    console.log(formDataTraining);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleEditTraining(id, formDataTraining) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}`, formDataTraining, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(formDataTraining);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(formDataTraining);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleOpenModalDetailTraining(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

export async function handleDeleteTraining(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleFetchTrainingMaterialData(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}/materials`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

export async function handleAddDocumentMaterialTraining(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + `/trainings/${id}/materials`);
    return response;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}
