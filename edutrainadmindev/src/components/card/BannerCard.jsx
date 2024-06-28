import { handleDeleteBanner, handleFetchBannerData } from "@/helpers/bannerHelper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteModal from "../modal/DeleteModal";
import { toast } from "sonner";

const BannerInfoCard = ({ id, title, url, openModalDelete }) => {
  return (
    <div className="bg-primary-white rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
      <Image src={url} quality={100} width={500} height={500} className="w-full h-auto rounded-t-lg" alt={title} priority />
      <div className="p-4">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="p-4 flex gap-3">
        <button className="flex items-center gap-3 rounded-lg bg-secondary-activeblue text-primary-white  hover:scale-105 py-1 px-6">
          <BsPencil />
          <p>Ubah</p>
        </button>
        <button className="flex items-center gap-3  rounded-lg bg-warm-red text-primary-white  hover:scale-105 py-1 px-6" onClick={() => openModalDelete(id)}>
          <FaRegTrashAlt />
          Hapus
        </button>
      </div>
    </div>
  );
};

export default function BannerCard() {
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState([]);
  // const [formEditIsOpenId, setFormEditIsOpenId] = useState(null);
  const [openModalDeleteId, setOpenModalDeleteId] = useState(null);
  // const [editBannerData, setEditBannerData] = useState(null);

  const fetchAllBanner = async () => {
    const response = await handleFetchBannerData();
    console.log(response);
    setBannerData(response);
    setLoading(false);
  };

  // const handleCloseFormEdit = () => {
  //   setFormEditIsOpenId(null);
  // };

  const handleCloseModalDelete = () => {
    setOpenModalDeleteId(null);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteBanner(openModalDeleteId);
    if (response.status === 200) {
      toast.success("Banner Deleted Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    setOpenModalDeleteId(null);
    router.refresh();
  };

  // const openModalEdit = (id) => {
  //   const bannerToEdit = bannerData.find((banner) => banner.id === id);
  //   setEditBannerData(bannerToEdit);
  //   setFormEditIsOpenId(id);
  // };

  const openModalDelete = (id) => {
    setOpenModalDeleteId(id);
  };

  useEffect(() => {
    fetchAllBanner();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!bannerData || bannerData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data Banner Found</div>;
  }

  return (
    <div>
      <div className="py-2 text-lg text-primary-blue border-b-2 w-fit p-2 border-primary-blue font-bold">All Banners</div>
      <div className="py-5 grid md:grid-cols-2 gap-7">
        {bannerData.map((banner) => (
          <BannerInfoCard key={banner.id} id={banner.id} title={banner.title} url={banner.url} openModalDelete={openModalDelete} />
        ))}
      </div>
      <DeleteModal
        open={openModalDeleteId !== null}
        onClose={handleCloseModalDelete}
        onConfirm={handleDeleteConfirm}
        title="Apa anda yakin ingin menghapus Banner ini ?"
        description="Data-data terkait Banner akan terhapus secara permanen."
      />
    </div>
  );
}
