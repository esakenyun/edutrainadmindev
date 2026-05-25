import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFecthUserAccountDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/accounts?role=USER"));
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

async function handleFecthUserAccountDataMock() {
  return getStoreState().getUserAccounts();
}

export async function handleFecthUserAccountData() {
  return isMockApiEnabled() ? handleFecthUserAccountDataMock() : handleFecthUserAccountDataApi();
}

async function handleFetchDetailUserDataApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/accounts/${id}`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function handleFetchDetailUserDataMock(id) {
  return getStoreState().getUserAccountById(id);
}

export async function handleFetchDetailUserData(id) {
  return isMockApiEnabled() ? handleFetchDetailUserDataMock(id) : handleFetchDetailUserDataApi(id);
}

async function handleAddUserAccountApi(formDataUser) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/accounts"), formDataUser);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

async function handleAddUserAccountMock(formDataUser) {
  const user = getStoreState().addUserAccount(formDataUser);
  return success(user, 201);
}

export async function handleAddUserAccount(formDataUser) {
  return isMockApiEnabled() ? handleAddUserAccountMock(formDataUser) : handleAddUserAccountApi(formDataUser);
}

async function handleDeleteUserAccountApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/accounts/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching User Account data:", error);
    return false;
  }
}

async function handleDeleteUserAccountMock(id) {
  getStoreState().deleteUserAccount(id);
  return success(true, 200);
}

export async function handleDeleteUserAccount(id) {
  return isMockApiEnabled() ? handleDeleteUserAccountMock(id) : handleDeleteUserAccountApi(id);
}
