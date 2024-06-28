import axios from "axios";
import Cookies from "js-cookie";

export async function handleLogin(email, password) {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
      email: email,
      password: password,
    });

    // console.log(response);
    if (response.status === 200) {
      const token = response.data.data.token;
      // console.log(token);
      Cookies.set("token", token, { expires: 1 });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleLogout() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/auth/logout");
    // console.log(response);
    // console.log(response.status);
    Cookies.remove("token");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
