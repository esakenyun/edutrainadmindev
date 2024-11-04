import axios from "axios";
import Cookies from "js-cookie";

export async function handleFetchStatistics() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/statistics/dashboard");
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}
