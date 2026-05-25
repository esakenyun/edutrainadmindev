import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchSubCategoryDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/sub-categories"));
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleFetchSubCategoryDataMock() {
  return getStoreState().getSubCategories();
}

export async function handleFetchSubCategoryData() {
  return isMockApiEnabled() ? handleFetchSubCategoryDataMock() : handleFetchSubCategoryDataApi();
}

async function handleAddSubCategoryApi(name) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/sub-categories"), name);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddSubCategoryMock(name) {
  const subCategory = getStoreState().addSubCategory(name);
  return success(subCategory, 201);
}

export async function handleAddSubCategory(name) {
  return isMockApiEnabled() ? handleAddSubCategoryMock(name) : handleAddSubCategoryApi(name);
}
