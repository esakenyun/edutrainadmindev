import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchStatisticsApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/statistics/dashboard"));
    return response;
  } catch (error) {
    return { data: 0, error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleFetchStatisticsMock() {
  return success(getStoreState().getStatistics(), 200);
}

export async function handleFetchStatistics() {
  return isMockApiEnabled() ? handleFetchStatisticsMock() : handleFetchStatisticsApi();
}
