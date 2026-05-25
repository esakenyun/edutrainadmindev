import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchCategoryDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/categories"));
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

async function handleFetchCategoryDataMock() {
  return getStoreState().getCategories();
}

export async function handleFetchCategoryData() {
  return isMockApiEnabled() ? handleFetchCategoryDataMock() : handleFetchCategoryDataApi();
}

async function handleAddCategoryApi(name) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/categories"), name);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddCategoryMock(name) {
  const category = getStoreState().addCategory(name);
  return success(category, 201);
}

export async function handleAddCategory(name) {
  return isMockApiEnabled() ? handleAddCategoryMock(name) : handleAddCategoryApi(name);
}
