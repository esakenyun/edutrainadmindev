"use client";
import { useEffect, useState } from "react";
import WebinarDetailPageComponent from "@/components/pages/webinar/WebinarDetailPageComponent";
import { handleDeleteWebinar, handleFetchDetailWebinarData, handleOpenModalDetailWebinar } from "@/helpers/webinarHelper";
import LoadingAnimation from "@/components/loading/LoadingAnimation";
import { useRouter } from "next/navigation";

export default function WebinarDetail({ params }) {
  const router = useRouter();
  const [currentData, setCurrentData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [webinarData, setWebinarData] = useState(null);

  const openModal = async () => {
    const response = await handleOpenModalDetailWebinar(params.id);
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
    const response = await handleDeleteWebinar(params.id);
    setOpenModalSuccess(true);
    setOpenModalDelete(false);
  };

  const handleCloseModalSuccess = () => {
    setOpenModalSuccess(false);
    router.push("/dashboard/webinar");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleFetchDetailWebinarData(params.id);
      setTimeout(() => {
        setWebinarData(response);
        setCurrentData(response);
      }, 2000);
    };

    fetchData();
  }, []);

  if (!webinarData) {
    return (
      <div className="pt-28">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <WebinarDetailPageComponent
      props={{
        webinarData: webinarData,
        webinarId: params.id,
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
