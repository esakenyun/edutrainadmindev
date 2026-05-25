import { useMockApiStore } from "@/store/useMockApiStore";

function success(data, status = 200) {
  return {
    status,
    data: {
      data,
    },
  };
}

function failure(message = "An error occurred", status = 400) {
  return {
    error: true,
    status,
    message,
    data: {
      message,
    },
  };
}

export function getStoreState() {
  return useMockApiStore.getState();
}

export { failure, success };
