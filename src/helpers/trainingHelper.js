import axios from "axios";
import { buildApiUrl, isMockApiEnabled, setAuthorizationHeader } from "@/helpers/apiRuntime";
import { getStoreState, success } from "@/helpers/mockApi";

async function handleFetchTrainingDataApi() {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl("/trainings"));
    return response.data.data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

async function handleFetchTrainingDataMock() {
  return getStoreState().getTrainings();
}

export async function handleFetchTrainingData() {
  return isMockApiEnabled() ? handleFetchTrainingDataMock() : handleFetchTrainingDataApi();
}

async function handleFetchDetailTrainingDataApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/trainings/${id}`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

async function handleFetchDetailTrainingDataMock(id) {
  return getStoreState().getTrainingById(id);
}

export async function handleFetchDetailTrainingData(id) {
  return isMockApiEnabled() ? handleFetchDetailTrainingDataMock(id) : handleFetchDetailTrainingDataApi(id);
}

async function handleFetchRegisteredTrainingUsersApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/trainings/${id}/registered-users`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

async function handleFetchRegisteredTrainingUsersMock(id) {
  return getStoreState().getRegisteredTrainingUsers(id);
}

export async function handleFetchRegisteredTrainingUsers(id) {
  return isMockApiEnabled() ? handleFetchRegisteredTrainingUsersMock(id) : handleFetchRegisteredTrainingUsersApi(id);
}

async function handleAddTrainingApi(formDataTraining) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl("/trainings"), formDataTraining, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(formDataTraining);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddTrainingMock(formDataTraining) {
  const training = getStoreState().addTraining(formDataTraining);
  return success(training, 201);
}

export async function handleAddTraining(formDataTraining) {
  return isMockApiEnabled() ? handleAddTrainingMock(formDataTraining) : handleAddTrainingApi(formDataTraining);
}

async function handleEditTrainingApi(id, formDataTraining) {
  try {
    setAuthorizationHeader();
    const response = await axios.put(buildApiUrl(`/trainings/${id}`), formDataTraining, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(formDataTraining);
    console.log(error);
    console.log(error.message);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleEditTrainingMock(id, formDataTraining) {
  const training = getStoreState().editTraining(id, formDataTraining);
  return success(training, 200);
}

export async function handleEditTraining(id, formDataTraining) {
  return isMockApiEnabled() ? handleEditTrainingMock(id, formDataTraining) : handleEditTrainingApi(id, formDataTraining);
}

async function handleOpenModalDetailTrainingApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/trainings/${id}`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
  }
}

async function handleOpenModalDetailTrainingMock(id) {
  return getStoreState().getTrainingById(id);
}

export async function handleOpenModalDetailTraining(id) {
  return isMockApiEnabled() ? handleOpenModalDetailTrainingMock(id) : handleOpenModalDetailTrainingApi(id);
}

async function handleDeleteTrainingApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.delete(buildApiUrl(`/trainings/${id}`));
    return response;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleDeleteTrainingMock(id) {
  getStoreState().deleteTraining(id);
  return success(true, 200);
}

export async function handleDeleteTraining(id) {
  return isMockApiEnabled() ? handleDeleteTrainingMock(id) : handleDeleteTrainingApi(id);
}

async function handleFetchTrainingMaterialDataApi(id) {
  try {
    setAuthorizationHeader();
    const response = await axios.get(buildApiUrl(`/trainings/${id}/materials`));
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleFetchTrainingMaterialDataMock(id) {
  return getStoreState().getTrainingMaterials(id);
}

export async function handleFetchTrainingMaterialData(id) {
  return isMockApiEnabled() ? handleFetchTrainingMaterialDataMock(id) : handleFetchTrainingMaterialDataApi(id);
}

async function handleAddDocumentMaterialTrainingApi(id, formDataMaterialTraining) {
  try {
    setAuthorizationHeader();
    const response = await axios.post(buildApiUrl(`/trainings/${id}/materials`), formDataMaterialTraining, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching training data:", error);
    return { error: true, message: error.response?.data?.message || "An error occurred" };
  }
}

async function handleAddDocumentMaterialTrainingMock(id, formDataMaterialTraining) {
  const material = getStoreState().addTrainingMaterial(id, formDataMaterialTraining);
  return success(material, 200);
}

export async function handleAddDocumentMaterialTraining(id, formDataMaterialTraining) {
  return isMockApiEnabled() ? handleAddDocumentMaterialTrainingMock(id, formDataMaterialTraining) : handleAddDocumentMaterialTrainingApi(id, formDataMaterialTraining);
}
