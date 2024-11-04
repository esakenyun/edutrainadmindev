"use client";
import { useEffect, useState } from "react";
import { handleDeleteTraining, handleFetchDetailTrainingData, handleFetchTrainingMaterialData, handleOpenModalDetailTraining } from "@/helpers/trainingHelper";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import LoadingAnimation from "@/components/loading/LoadingAnimation";
import TrainingDetailPageComponent from "@/components/pages/TrainingDetailPageComponent";

function formatTrainingDates(startTime, endTime) {
  if (!startTime || !endTime) {
    return "Tanggal tidak tersedia";
  }

  try {
    const startDate = parseISO(startTime);
    const endDate = parseISO(endTime);
    const startMonth = format(startDate, "MMMM");
    const endMonth = format(endDate, "MMMM");
    const startDay = format(startDate, "d");
    const endDay = format(endDate, "d");
    const year = format(startDate, "yyyy");

    if (startMonth === endMonth) {
      return `${startDay} - ${endDay} ${startMonth} ${year}`;
    } else {
      const startMonthShort = format(startDate, "MMM");
      const endMonthShort = format(endDate, "MMM");
      return `${startDay} ${startMonthShort} - ${endDay} ${endMonthShort} ${year}`;
    }
  } catch (error) {
    console.error("Error parsing dates:", error);
    return "Tanggal tidak valid";
  }
}

function calculateDiscountPercentage(price, discount) {
  return (discount / price) * 100;
}

export default function TrainingDetail({ params }) {
  const router = useRouter();
  const [currentData, setCurrentData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [trainingData, setTrainingData] = useState(null);
  const [materialData, setMaterialData] = useState([]);
  // const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isModalURL, setModalURL] = useState(false);
  const [isModalMaterial, setModalMaterial] = useState(false);

  const openModal = async () => {
    const response = await handleOpenModalDetailTraining(params.id);
    setCurrentData(response);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalURL = async () => {
    const response = await handleOpenModalDetailTraining(params.id);
    setCurrentData(response);
    setModalURL(true);
  };

  const closeModalURL = () => {
    setModalURL(false);
  };

  const openModalMaterial = async () => {
    const response = await handleOpenModalDetailTraining(params.id);
    setCurrentData(response);
    setModalMaterial(true);
  };

  const closeModalMaterial = () => {
    setModalMaterial(false);
  };

  const onHandleClickHapus = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteTraining(params.id);
    setOpenModalSuccess(true);
    setOpenModalDelete(false);
  };

  const handleCloseModalSuccess = () => {
    setOpenModalSuccess(false);
    router.push("/dashboard/training");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleFetchDetailTrainingData(params.id);
      console.log(response);
      setTimeout(() => {
        setTrainingData(response);
        setCurrentData(response);
      }, 2000);
    };

    const fetchMaterialData = async () => {
      const response = await handleFetchTrainingMaterialData(params.id);
      setMaterialData(response);
    };

    // const fetchDataRegisteredUsers = async () => {
    //   const response = await handleFetchRegisteredTrainingUsers(params.id);
    //   setRegisteredUsers(response);
    // };

    fetchData();
    fetchMaterialData();
    // fetchDataRegisteredUsers();
  }, []);

  if (!trainingData) {
    return (
      <div className="pt-28">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <TrainingDetailPageComponent
      props={{
        trainingData: trainingData,
        trainingId: params.id,
        openModal: openModal,
        isModalOpen: isModalOpen,
        closeModal: closeModal,
        onHandleClickHapus: onHandleClickHapus,
        openModalDelete: openModalDelete,
        handleCloseModalDelete: handleCloseModalDelete,
        handleDeleteConfirm: handleDeleteConfirm,
        openModalSuccess: openModalSuccess,
        handleCloseModalSuccess: handleCloseModalSuccess,
        isModalURL: isModalURL,
        openModalURL: openModalURL,
        closeModalURL: closeModalURL,
        isModalMaterial: isModalMaterial,
        openModalMaterial: openModalMaterial,
        closeModalMaterial: closeModalMaterial,
        materialData: materialData,
      }}
    />
  );
}
