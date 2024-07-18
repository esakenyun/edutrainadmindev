import { IoPlayCircleOutline } from "react-icons/io5";
import { LiaThLargeSolid } from "react-icons/lia";
import { FaRegTrashAlt, FaRegUser } from "react-icons/fa";
import { TiStarburstOutline } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import DeleteModal from "@/components/modal/DeleteModal";
import SuccessModal from "@/components/modal/SuccessModal";
import FormEditModalWorkshop from "../modal/FormEditModalWorkshop";
import Image from "next/image";
import RegisteredWorkshopTable from "../table/RegisteredWorkshopTable";

export default function WorkshopDetailPageComponent({ props }) {
  const workshopData = props.workshopData;
  const workshopId = props.workshopId;

  const openModal = props.openModal;
  const isModalOpen = props.isModalOpen;
  const closeModal = props.closeModal;

  const onHandleClickHapus = props.onHandleClickHapus;
  const openModalDelete = props.openModalDelete;
  const handleCloseModalDelete = props.handleCloseModalDelete;

  const handleDeleteConfirm = props.handleDeleteConfirm;
  const openModalSuccess = props.openModalSuccess;
  const handleCloseModalSuccess = props.handleCloseModalSuccess;

  return (
    <div className="py-7">
      <div className="flex items-center gap-2 justify-between">
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Rincian Workshop</p>
      </div>
      <div className="py-4 px-3">
        <p className="font-bold uppercase text-black md:text-2xl">{workshopData.title}</p>
        <div className="py-3 flex flex-col lg:flex-row gap-10">
          <Image src={workshopData.banner} quality={100} width={500} height={500} className="w-9/12 h-auto" alt={workshopData.title} priority />
          <div className="h-fit bg-primary-white rounded-lg shadow-2xl">
            <div className="py-5 px-5 text-secondary-dark">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-lg md:text-xl">Rincian Workshop:</h1>
                <div className="py-1 px-2 bg-warm-redtomato text-xs text-secondary-light rounded-lg">
                  <p>50% OFF</p>
                </div>
              </div>
              <div className="py-3 flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <FaRegUser className="text-xl" />
                  <p className="text-sm">{workshopData.instructor}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <LiaThLargeSolid className="text-xl" />
                  <p className="text-sm">{workshopData.category.name}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <IoPlayCircleOutline className="text-xl" />
                  <p className="text-sm">{workshopData.status}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <TiStarburstOutline className="text-xl" />
                  <p className="text-sm">{workshopData.certificate ? "Sertifikat" : "Tanpa Sertifikat"}</p>
                </div>
              </div>
              <p className="text-xs font-medium line-through">Rp. 200.000 / dummy</p>
              <div className="py-2">
                <p className="font-bold">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(workshopData.lastWorkshopHistory.price)}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={openModal} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-primary-blue rounded-lg">
                  <BsPencil />
                  Ubah
                </button>
                {!workshopData ? <></> : <FormEditModalWorkshop currentData={workshopData} isOpen={isModalOpen} onClose={closeModal} />}
                <button onClick={onHandleClickHapus} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-warm-redtomato rounded-lg">
                  <FaRegTrashAlt />
                  Hapus
                </button>

                <DeleteModal
                  open={openModalDelete}
                  onClose={handleCloseModalDelete}
                  onConfirm={handleDeleteConfirm}
                  title="Apa anda yakin ingin menghapus workshop ini?"
                  description="Data-data terkait workshop akan terhapus secara permanen."
                />

                <SuccessModal open={openModalSuccess} onClose={handleCloseModalSuccess} title="Workshop Berhasil dihapus!" description="Anda bisa membuat workshop baru di halaman workshop." />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p className="font-medium">{workshopData.description}</p>
        </div>
        {console.log(workshopId)}
        <RegisteredWorkshopTable id={workshopId} />
      </div>
    </div>
  );
}
