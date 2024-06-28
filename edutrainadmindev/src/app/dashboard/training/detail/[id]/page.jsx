"use client";
import { useEffect, useState } from "react";
import { BiCalendarExclamation } from "react-icons/bi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegTrashAlt, FaRegUser } from "react-icons/fa";
import { TiStarburstOutline } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import DeleteModal from "@/components/modal/DeleteModal";
import SuccessModal from "@/components/modal/SuccessModal";
import { handleDeleteTraining, handleFetchDetailTrainingData, handleFetchTrainingMaterialData, handleOpenModalDetailTraining } from "@/helpers/trainingHelper";
import { useRouter } from "next/navigation";
import FormEditModalTraining from "@/components/modal/FormEditModalTraining";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import FormModalURLGroupTraining from "@/components/modal/FormModalURLGroupTraining";
import FormModalMaterialTraining from "@/components/modal/FormModalMaterialTraining";
import RegisteredTrainingTable from "@/components/table/RegisteredTrainingTable";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

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
    router.push("/admin/dashboard/training");
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
        <LoadingAnimation />;
      </div>
    );
  }

  return (
    <div className="py-7">
      <div className="flex items-center gap-2 justify-between">
        <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Rincian Training</div>
      </div>
      <div className="py-4 px-3">
        <p className="font-bold uppercase text-black md:text-2xl ">{trainingData.title}</p>
        <div className="py-3 flex flex-col lg:flex-row gap-10">
          <Image src={trainingData.banner} quality={100} width={500} height={500} className="w-9/12 h-auto rounded-xl" alt={trainingData.title} priority />
          <div className="flex flex-col gap-3">
            <div className="h-fit bg-primary-white rounded-lg shadow-2xl">
              <div className="py-5 px-5 text-secondary-dark">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg md:text-xl">Rincian Training:</h1>
                  <div className="py-1 px-2 bg-warm-redtomato text-xs text-secondary-light rounded-lg">
                    <p>{trainingData.lastTrainingHistory.discount}% OFF</p>
                  </div>
                </div>
                <div className="py-3 flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <FaRegUser className="text-xl" />
                    <p className="text-sm">John McKenny</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BiCalendarExclamation className="text-xl" />
                    <p className="text-sm">{formatTrainingDates(trainingData.startTime, trainingData.endTime)}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoPlayCircleOutline className="text-xl" />
                    <p className="text-sm">Playback</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <TiStarburstOutline className="text-xl" />
                    <p className="text-sm">Sertifikat</p>
                  </div>
                </div>
                <p className="text-xs font-medium line-through">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(trainingData.lastTrainingHistory.price)}</p>
                <div className="py-2">
                  {trainingData.lastTrainingHistory.discount === "100" ? (
                    <p className="font-bold text-lg">Free Training</p>
                  ) : (
                    <p className="font-bold">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(trainingData.lastTrainingHistory.price - (trainingData.lastTrainingHistory.price * trainingData.lastTrainingHistory.discount) / 100)}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={openModal} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-primary-blue rounded-lg">
                    <BsPencil />
                    Ubah
                  </button>
                  {!trainingData ? <></> : <FormEditModalTraining currentData={trainingData} isOpen={isModalOpen} onClose={closeModal} />}
                  {!trainingData ? <></> : <FormModalURLGroupTraining trainingData={trainingData} open={isModalURL} onClose={closeModalURL} />}
                  {!trainingData ? <></> : <FormModalMaterialTraining trainingData={trainingData} open={isModalMaterial} onClose={closeModalMaterial} />}

                  <button onClick={onHandleClickHapus} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-warm-redtomato rounded-lg">
                    <FaRegTrashAlt />
                    Hapus
                  </button>

                  <DeleteModal
                    open={openModalDelete}
                    onClose={handleCloseModalDelete}
                    onConfirm={handleDeleteConfirm}
                    title="Apa anda yakin ingin menghapus training ini?"
                    description="Data-data terkait training akan terhapus secara permanen."
                  />

                  <SuccessModal open={openModalSuccess} onClose={handleCloseModalSuccess} title="Training Berhasil dihapus!" description="Anda bisa membuat training baru di halaman training." />
                </div>
              </div>
            </div>
            <div className="h-fit w-fit lg:w-full bg-primary-white rounded-lg shadow-2xl ">
              <div className="py-3 px-3 flex gap-5 justify-center">
                <button onClick={openModalMaterial} className="bg-primary-blue text-primary-white py-2 px-4 rounded-md hover:scale-105 outline-none">
                  Add Materials
                </button>
                <button onClick={openModalURL} className="bg-primary-green text-primary-white py-2 px-4 rounded-md hover:scale-105 outline-none">
                  Add URL Group
                </button>
              </div>
            </div>
            <div className="h-fit bg-primary-white rounded-lg shadow-2xl">
              <div className="py-3 px-3">
                <p className="font-bold text-xl">URL Group</p>
                <div className="flex items-center gap-3">
                  <p>Title :</p>
                  <p className="font-bold">{trainingData.urlExternalTitle}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p>URL :</p>
                  <div className="flex">
                    <a href={trainingData.urlExternal} className="w-52 break-all text-primary-blue hover:text-secondary-activeblue underline" target="_blank">
                      {trainingData.urlExternal}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit bg-primary-white rounded-lg shadow-2xl">
              <div className="py-3 px-3">
                <p className="font-bold text-xl">Material Data</p>
                <div className="flex items-center gap-3">
                  <p>Title :</p>
                  <p className="font-bold">{materialData.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p>Description :</p>
                  <p className="font-bold">{materialData.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p>URL :</p>
                  <div className="flex">
                    <a href={materialData.url} className="w-52 break-all text-primary-blue hover:text-secondary-activeblue underline" target="_blank">
                      {materialData.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p className="text-secondary-dark font-bold text-xl">Description :</p>
          <div className="font-medium" dangerouslySetInnerHTML={{ __html: trainingData.description }} />
          <div className="pt-3">
            <p className="text-secondary-dark font-bold text-xl">Sylabus :</p>
            <div className="font-medium" dangerouslySetInnerHTML={{ __html: trainingData.syllabus }} />
          </div>
        </div>
        <RegisteredTrainingTable id={params.id} />
      </div>
    </div>
  );
}
