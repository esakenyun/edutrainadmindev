import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchFAQDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/faqs"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchFAQDataMock() {
  return getStoreState().getFaqs();
}

export async function handleFetchFAQData() {
  return isMockApiEnabled() ? handleFetchFAQDataMock() : handleFetchFAQDataApi();
}

async function handleAddFAQApi(formDataFAQ) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/faqs"), formDataFAQ);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddFAQMock(formDataFAQ) {
  const faq = getStoreState().addFaq(formDataFAQ);
  return success(faq, 201);
}

export async function handleAddFAQ(formDataFAQ) {
  return isMockApiEnabled() ? handleAddFAQMock(formDataFAQ) : handleAddFAQApi(formDataFAQ);
}

async function handleEditFAQApi(id, formDataFAQ) {
  try {
    const response = await axios.put(buildApiUrl(`/faqs/${id}`), formDataFAQ);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditFAQMock(id, formDataFAQ) {
  const faq = getStoreState().editFaq(id, formDataFAQ);
  return success(faq, 200);
}

export async function handleEditFAQ(id, formDataFAQ) {
  return isMockApiEnabled() ? handleEditFAQMock(id, formDataFAQ) : handleEditFAQApi(id, formDataFAQ);
}

async function handleDeleteFAQApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/faqs/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleDeleteFAQMock(id) {
  getStoreState().deleteFaq(id);
  return success(true, 200);
}

export async function handleDeleteFAQ(id) {
  return isMockApiEnabled() ? handleDeleteFAQMock(id) : handleDeleteFAQApi(id);
}
