import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFecthAdminAccountDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/accounts/admin"));
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

async function handleFecthAdminAccountDataMock() {
  return getStoreState().getAdminAccounts();
}

export async function handleFecthAdminAccountData() {
  return isMockApiEnabled() ? handleFecthAdminAccountDataMock() : handleFecthAdminAccountDataApi();
}

async function handleAddAdminAccountApi(formDataAdmin) {
  try {
    const response = await axios.post(buildApiUrl("/auth/register/admin"), formDataAdmin);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

async function handleAddAdminAccountMock(formDataAdmin) {
  const admin = getStoreState().addAdminAccount(formDataAdmin);
  return success(admin, 201);
}

export async function handleAddAdminAccount(formDataAdmin) {
  return isMockApiEnabled() ? handleAddAdminAccountMock(formDataAdmin) : handleAddAdminAccountApi(formDataAdmin);
}

async function handleEditAdminAccountApi(id, formDataAdmin) {
  try {
    setAuthorizationHeader();
    const response = await axios.put(buildApiUrl(`/accounts/${id}`), formDataAdmin);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditAdminAccountMock(id, formDataAdmin) {
  const admin = getStoreState().editAdminAccount(id, formDataAdmin);
  return success(admin, 200);
}

export async function handleEditAdminAccount(id, formDataAdmin) {
  return isMockApiEnabled() ? handleEditAdminAccountMock(id, formDataAdmin) : handleEditAdminAccountApi(id, formDataAdmin);
}

async function handleDeleteAdminAccountApi(id) {
  try {
    const token = setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/accounts/${id}`), {
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

async function handleDeleteAdminAccountMock(id) {
  getStoreState().deleteAdminAccount(id);
  return success(true, 200);
}

export async function handleDeleteAdminAccount(id) {
  return isMockApiEnabled() ? handleDeleteAdminAccountMock(id) : handleDeleteAdminAccountApi(id);
}
