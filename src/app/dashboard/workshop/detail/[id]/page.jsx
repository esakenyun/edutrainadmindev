"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WorkshopDetailPageComponent from "@/components/pages/WorkshopDetailPageComponent";
import { handleDeleteWorkshop, handleFetchDetailWorkshopData, handleOpenModalDetailWorkshop } from "@/helpers/workshopHelper";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

export default function WorkshopDetail({ params }) {
  const router = useRouter();
  const [currentData, setCurrentData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [workshopData, setWorkshopData] = useState(null);

  const openModal = async () => {
    const response = await handleOpenModalDetailWorkshop(params.id);
    setCurrentData(response);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onHandleClickHapus = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteWorkshop(params.id);
    setOpenModalSuccess(true);
    setOpenModalDelete(false);
  };

  const handleCloseModalSuccess = () => {
    setOpenModalSuccess(false);
    router.push("/dashboard/workshop");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleFetchDetailWorkshopData(params.id);
      console.log(response);
      setTimeout(() => {
        setWorkshopData(response);
        setCurrentData(response);
      }, 2000);
    };

    fetchData();
  }, []);

  if (!workshopData) {
    return (
      <div className="pt-28">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <WorkshopDetailPageComponent
      props={{
        workshopData: workshopData,
        workshopId: params.id,
        openModal: openModal,
        isModalOpen: isModalOpen,
        closeModal: closeModal,
        onHandleClickHapus: onHandleClickHapus,
        openModalDelete: openModalDelete,
        handleCloseModalDelete: handleCloseModalDelete,
        handleDeleteConfirm: handleDeleteConfirm,
        openModalSuccess: openModalSuccess,
        handleCloseModalSuccess: handleCloseModalSuccess,
      }}
    />
  );
}
