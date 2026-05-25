import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchWebinarDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/webinars"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchWebinarDataMock() {
  return getStoreState().getWebinars();
}

export async function handleFetchWebinarData() {
  return isMockApiEnabled() ? handleFetchWebinarDataMock() : handleFetchWebinarDataApi();
}

async function handleFetchDetailWebinarDataApi(id) {
  try {
    setAuthorizationHeader();
    const response = await fetch(buildApiUrl(`/webinars/${id}`));
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

async function handleFetchDetailWebinarDataMock(id) {
  return getStoreState().getWebinarById(id);
}

export async function handleFetchDetailWebinarData(id) {
  return isMockApiEnabled() ? handleFetchDetailWebinarDataMock(id) : handleFetchDetailWebinarDataApi(id);
}

async function handleFetchRegisteredWebinarUsersApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/webinars/${id}/registered-users`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

async function handleFetchRegisteredWebinarUsersMock(id) {
  return getStoreState().getRegisteredWebinarUsers(id);
}

export async function handleFetchRegisteredWebinarUsers(id) {
  return isMockApiEnabled() ? handleFetchRegisteredWebinarUsersMock(id) : handleFetchRegisteredWebinarUsersApi(id);
}

async function handleAddWebinarApi(formDataWebinar) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/webinars"), formDataWebinar);
    return response;
  } catch (error) {
    console.log(formDataWebinar);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddWebinarMock(formDataWebinar) {
  const webinar = getStoreState().addWebinar(formDataWebinar);
  return success(webinar, 201);
}

export async function handleAddWebinar(formDataWebinar) {
  return isMockApiEnabled() ? handleAddWebinarMock(formDataWebinar) : handleAddWebinarApi(formDataWebinar);
}

async function handleEditWebinarApi(id, formDataWebinar) {
  try {
    setAuthorizationHeader();
    const response = await axios.put(buildApiUrl(`/webinars/${id}`), formDataWebinar, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(formDataWebinar);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditWebinarMock(id, formDataWebinar) {
  const webinar = getStoreState().editWebinar(id, formDataWebinar);
  return success(webinar, 200);
}

export async function handleEditWebinar(id, formDataWebinar) {
  return isMockApiEnabled() ? handleEditWebinarMock(id, formDataWebinar) : handleEditWebinarApi(id, formDataWebinar);
}

async function handleOpenModalDetailWebinarApi(id) {
  try {
    setAuthorizationHeader();
    const response = await fetch(buildApiUrl(`/webinars/${id}`));
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

async function handleOpenModalDetailWebinarMock(id) {
  return getStoreState().getWebinarById(id);
}

export async function handleOpenModalDetailWebinar(id) {
  return isMockApiEnabled() ? handleOpenModalDetailWebinarMock(id) : handleOpenModalDetailWebinarApi(id);
}

async function handleDeleteWebinarApi(id) {
  try {
    setAuthorizationHeader();
    return await axios.delete(buildApiUrl(`/webinars/${id}`));
  } catch (error) {
    console.error("Error fetching webinar data:", error);
  }
}

async function handleDeleteWebinarMock(id) {
  getStoreState().deleteWebinar(id);
  return success(true, 200);
}

export async function handleDeleteWebinar(id) {
  return isMockApiEnabled() ? handleDeleteWebinarMock(id) : handleDeleteWebinarApi(id);
}
