import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchVideoContentDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/videos"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchVideoContentDataMock() {
  return getStoreState().getVideos();
}

export async function handleFetchVideoContentData() {
  return isMockApiEnabled() ? handleFetchVideoContentDataMock() : handleFetchVideoContentDataApi();
}

async function handleAddVideoContentApi(formDataVideoContent) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/videos"), formDataVideoContent);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.error || "An error occurred" };
  }
}

async function handleAddVideoContentMock(formDataVideoContent) {
  const video = getStoreState().addVideo(formDataVideoContent);
  return success(video, 201);
}

export async function handleAddVideoContent(formDataVideoContent) {
  return isMockApiEnabled() ? handleAddVideoContentMock(formDataVideoContent) : handleAddVideoContentApi(formDataVideoContent);
}

async function handleEditVideoContentApi(id, formDataVideoContent) {
  try {
    const response = await axios.put(buildApiUrl(`/videos/${id}`), formDataVideoContent);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.error || "An error occurred" };
  }
}

async function handleEditVideoContentMock(id, formDataVideoContent) {
  const video = getStoreState().editVideo(id, formDataVideoContent);
  return success(video, 200);
}

export async function handleEditVideoContent(id, formDataVideoContent) {
  return isMockApiEnabled() ? handleEditVideoContentMock(id, formDataVideoContent) : handleEditVideoContentApi(id, formDataVideoContent);
}

async function handleDeleteVideoContentApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/videos/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching Video Content data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleDeleteVideoContentMock(id) {
  getStoreState().deleteVideo(id);
  return success(true, 200);
}

export async function handleDeleteVideoContent(id) {
  return isMockApiEnabled() ? handleDeleteVideoContentMock(id) : handleDeleteVideoContentApi(id);
}
