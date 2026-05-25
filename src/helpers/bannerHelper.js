import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchBannerDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/banners"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchBannerDataMock() {
  return getStoreState().getBanners();
}

export async function handleFetchBannerData() {
  return isMockApiEnabled() ? handleFetchBannerDataMock() : handleFetchBannerDataApi();
}

async function handleAddBannerApi(formDataBanner) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/banners"), formDataBanner);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddBannerMock(formDataBanner) {
  const banner = getStoreState().addBanner(formDataBanner);
  return success(banner, 201);
}

export async function handleAddBanner(formDataBanner) {
  return isMockApiEnabled() ? handleAddBannerMock(formDataBanner) : handleAddBannerApi(formDataBanner);
}

async function handleEditBannerApi(id, formDataBanner) {
  try {
    setAuthorizationHeader();
    const response = await axios.put(buildApiUrl(`/banners/${id}`), formDataBanner);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditBannerMock(id, formDataBanner) {
  const banner = getStoreState().editBanner(id, formDataBanner);
  return success(banner, 200);
}

export async function handleEditBanner(id, formDataBanner) {
  return isMockApiEnabled() ? handleEditBannerMock(id, formDataBanner) : handleEditBannerApi(id, formDataBanner);
}

async function handleDeleteBannerApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/banners/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching Banner data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleDeleteBannerMock(id) {
  getStoreState().deleteBanner(id);
  return success(true, 200);
}

export async function handleDeleteBanner(id) {
  return isMockApiEnabled() ? handleDeleteBannerMock(id) : handleDeleteBannerApi(id);
}
