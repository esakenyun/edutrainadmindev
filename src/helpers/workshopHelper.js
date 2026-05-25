import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchWorkshopDataApi() {
  try {
    const response = await axios.get(buildApiUrl("/workshops"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchWorkshopDataMock() {
  return getStoreState().getWorkshops();
}

export async function handleFetchWorkshopData() {
  return isMockApiEnabled() ? handleFetchWorkshopDataMock() : handleFetchWorkshopDataApi();
}

async function handleFetchDetailWorkshopDataApi(id) {
  try {
    const response = await fetch(buildApiUrl(`/workshops/${id}`));
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

async function handleFetchDetailWorkshopDataMock(id) {
  return getStoreState().getWorkshopById(id);
}

export async function handleFetchDetailWorkshopData(id) {
  return isMockApiEnabled() ? handleFetchDetailWorkshopDataMock(id) : handleFetchDetailWorkshopDataApi(id);
}

async function handleFetchRegisteredWorkshopUsersApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/workshops/${id}/registered-users`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

async function handleFetchRegisteredWorkshopUsersMock(id) {
  return getStoreState().getRegisteredWorkshopUsers(id);
}

export async function handleFetchRegisteredWorkshopUsers(id) {
  return isMockApiEnabled() ? handleFetchRegisteredWorkshopUsersMock(id) : handleFetchRegisteredWorkshopUsersApi(id);
}

async function handleAddWorkshopApi(formDataWorkshop) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/workshops"), formDataWorkshop, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddWorkshopMock(formDataWorkshop) {
  const workshop = getStoreState().addWorkshop(formDataWorkshop);
  return success(workshop, 201);
}

export async function handleAddWorkshop(formDataWorkshop) {
  return isMockApiEnabled() ? handleAddWorkshopMock(formDataWorkshop) : handleAddWorkshopApi(formDataWorkshop);
}

async function handleOpenModalDetailWorkshopApi(id) {
  try {
    const response = await axios.get(buildApiUrl(`/workshops/${id}`));
    return response.data?.data || response.data;
  } catch (error) {
    console.error("Error fetching workshop data: ", error);
  }
}

async function handleOpenModalDetailWorkshopMock(id) {
  return getStoreState().getWorkshopById(id);
}

export async function handleOpenModalDetailWorkshop(id) {
  return isMockApiEnabled() ? handleOpenModalDetailWorkshopMock(id) : handleOpenModalDetailWorkshopApi(id);
}

async function handleEditWorkshopApi(id, formDataWorkshop) {
  try {
    setAuthorizationHeader();
    const response = await axios.put(buildApiUrl(`/workshops/${id}`), formDataWorkshop, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditWorkshopMock(id, formDataWorkshop) {
  const workshop = getStoreState().editWorkshop(id, formDataWorkshop);
  return success(workshop, 200);
}

export async function handleEditWorkshop(id, formDataWorkshop) {
  return isMockApiEnabled() ? handleEditWorkshopMock(id, formDataWorkshop) : handleEditWorkshopApi(id, formDataWorkshop);
}

async function handleDeleteWorkshopApi(id) {
  try {
    const token = setAuthorizationHeader();
    return await axios.delete(buildApiUrl(`/workshops/${id}`), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log("Error fetching workshop data: ", error);
  }
}

async function handleDeleteWorkshopMock(id) {
  getStoreState().deleteWorkshop(id);
  return success(true, 200);
}

export async function handleDeleteWorkshop(id) {
  return isMockApiEnabled() ? handleDeleteWorkshopMock(id) : handleDeleteWorkshopApi(id);
}
