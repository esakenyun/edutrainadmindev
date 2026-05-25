import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchOrderDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/orders"));
    return response.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchOrderDataMock() {
  return success(getStoreState().getOrders(), 200).data;
}

export async function handleFetchOrderData() {
  return isMockApiEnabled() ? handleFetchOrderDataMock() : handleFetchOrderDataApi();
}

async function handleFetchDetailOrderDataApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/orders/${id}`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Order data:", error);
  }
}

async function handleFetchDetailOrderDataMock(id) {
  return getStoreState().getOrderById(id);
}

export async function handleFetchDetailOrderData(id) {
  return isMockApiEnabled() ? handleFetchDetailOrderDataMock(id) : handleFetchDetailOrderDataApi(id);
}

async function handleVerifyOrderApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl(`/orders/${id}/verify`));
    return response;
  } catch (error) {
    console.error("Error fetching Order data:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

async function handleVerifyOrderMock(id) {
  getStoreState().verifyOrder(id);
  return success(true, 200);
}

export async function handleVerifyOrder(id) {
  return isMockApiEnabled() ? handleVerifyOrderMock(id) : handleVerifyOrderApi(id);
}

async function handleAddOrderApi(formDataOrder) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/orders"), formDataOrder);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddOrderMock(formDataOrder) {
  const order = getStoreState().addOrder(formDataOrder);
  return success(order, 201);
}

export async function handleAddOrder(formDataOrder) {
  return isMockApiEnabled() ? handleAddOrderMock(formDataOrder) : handleAddOrderApi(formDataOrder);
}

async function handleEditOrderApi(id, formDataOrder) {
  try {
    const response = await axios.put(buildApiUrl(`/orders/${id}`), formDataOrder);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

async function handleEditOrderMock(id, formDataOrder) {
  const order = getStoreState().editOrder(id, formDataOrder);
  return success(order, 200);
}

export async function handleEditOrder(id, formDataOrder) {
  return isMockApiEnabled() ? handleEditOrderMock(id, formDataOrder) : handleEditOrderApi(id, formDataOrder);
}

async function handleDeleteOrderApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/orders/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching Order data:", error);
    return {
      error: true,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

async function handleDeleteOrderMock(id) {
  getStoreState().deleteOrder(id);
  return success(true, 200);
}

export async function handleDeleteOrder(id) {
  return isMockApiEnabled() ? handleDeleteOrderMock(id) : handleDeleteOrderApi(id);
}
