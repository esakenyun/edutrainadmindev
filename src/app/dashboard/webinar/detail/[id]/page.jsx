"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WebinarDetailPageComponent from "@/components/pages/WebinarDetailPageComponent";
import { handleDeleteWebinar, handleFetchDetailWebinarData, handleOpenModalDetailWebinar } from "@/helpers/webinarHelper";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

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

  // useEffect(() => {
  //   // console.log("heehe");
  //   if (currentData !== null) {
  //     setModalOpen(true);
  //   }
  // }, [currentData, setModalOpen]);

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
    router.push("/admin/dashboard/webinar");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleFetchDetailWebinarData(params.id);
      console.log(response);
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
