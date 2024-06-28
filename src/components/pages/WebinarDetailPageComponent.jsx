import { BiCalendarExclamation } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import { LiaMapPinSolid } from "react-icons/lia";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import { TiStarburstOutline } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import SuccessModal from "@/components/modal/SuccessModal";
import DeleteModal from "@/components/modal/DeleteModal";
import FormEditModalWebinar from "@/components/modal/FormEditModalWebinar";
import Image from "next/image";
export default function WebinarDetailPageComponent({ props }) {
  const webinarData = props.webinarData;

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
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Rincian Webinar</p>
      </div>
      <div className="py-4 px-3">
        <p className="font-bold uppercase text-black md:text-2xl ">{webinarData.title}</p>
        <div className="py-3 flex flex-col lg:flex-row gap-6">
          <Image src={webinarData.banner} quality={100} width={500} height={500} className="w-9/12 h-auto" alt={webinarData.title} priority />

          <div className="h-fit bg-primary-white rounded-lg shadow-2xl">
            <div className="py-5 px-5 text-secondary-dark">
              <h1 className="font-bold text-lg md:text-xl">Rincian Webinar:</h1>
              <div className="py-3 flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <BiCalendarExclamation className="text-xl" />
                  <p className="text-sm">{new Date(webinarData.startTime).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <LuAlarmClock className="text-xl" />
                  <p className="text-sm">
                    {new Date(webinarData.startTime).toLocaleTimeString()} - {new Date(webinarData.endTime).toLocaleTimeString()}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <LiaMapPinSolid className="text-xl" />
                  <p className="text-sm">{webinarData.eventStatus === "ONLINE" ? "Online" : "Offline"}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaUsers className="text-xl" />
                  <p className="text-sm">{webinarData.maxAttendees} Peserta</p>
                </div>
                <div className="flex gap-2 items-center">
                  <TiStarburstOutline className="text-xl" />
                  <p className="text-sm">{webinarData.certificate ? "Sertifikat" : "Tanpa Sertifikat"}</p>
                </div>
              </div>
              <div className="py-2 ">
                <p className="font-bold">{webinarData.price}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={openModal} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-primary-blue rounded-lg">
                  <BsPencil />
                  Ubah
                </button>
                {/* {console.log(webinarData)} */}
                {!webinarData ? <></> : <FormEditModalWebinar currentData={webinarData} isOpen={isModalOpen} onClose={closeModal} />}

                <button onClick={onHandleClickHapus} className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-warm-redtomato rounded-lg">
                  <FaRegTrashAlt />
                  Hapus
                </button>

                <DeleteModal
                  open={openModalDelete}
                  onClose={handleCloseModalDelete}
                  onConfirm={handleDeleteConfirm}
                  title="Apa anda yakin ingin menghapus webinar ini?"
                  description="Data-data terkait webinar akan terhapus secara permanen."
                />

                <SuccessModal open={openModalSuccess} onClose={handleCloseModalSuccess} title="Webinar Berhasil dihapus!" description="Anda bisa membuat webinar baru di halaman webinar." />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p className="font-medium">{webinarData.description}</p>
        </div>
      </div>
    </div>
  );
}
