import { handleDeleteVideoContent, handleFetchVideoContentData } from "@/helpers/videoContentHelper";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import DeleteModal from "../modal/DeleteModal";
import FormEditModalVideo from "../modal/FormEditModalVideo";

const VideoContentInfoCard = ({ id, title, url, openModalDelete, openModalEdit }) => {
  return (
    <div className="bg-primary-white rounded-lg">
      <iframe src={url} className="w-full rounded-t-xl mb-2 aspect-video" height={240} title={title} allowFullScreen />
      <div className="flex justify-between items-center pt-2 pb-5 px-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="w-full">
            Link Video URL :{" "}
            <a href={url} target="_blank" className="text-primary-blue hover:underline">
              {url}
            </a>
          </p>
          <div className="flex gap-3 mt-3">
            <button className="flex w-full justify-center items-center gap-3 rounded-lg py-1 px-5 bg-secondary-activeblue text-primary-white hover:scale-105" onClick={() => openModalEdit(id)}>
              <BsPencil />
              Ubah
            </button>
            <button className="flex w-full justify-center items-center gap-3 rounded-lg bg-warm-red text-primary-white  hover:scale-105 py-1 px-6" onClick={() => openModalDelete(id)}>
              <FaRegTrashAlt />
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoContentCard() {
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [formEditIsOpenId, setFormEditIsOpenId] = useState(null);
  const [openModalDeleteId, setOpenModalDeleteId] = useState(null);
  const [editVideoData, setEditVideoData] = useState(null);

  const fetchAllVideoContent = async () => {
    const response = await handleFetchVideoContentData();
    setVideoData(response);
    setLoading(false);
  };

  const handleCloseFormEdit = () => {
    setFormEditIsOpenId(null);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDeleteId(null);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteVideoContent(openModalDeleteId);
    if (response.status === 200) {
      toast.success("Video Deleted Successfully");
      fetchAllVideoContent();
    } else if (response.error) {
      toast.error(response.message);
    }
    setOpenModalDeleteId(null);
  };

  const openModalEdit = (id) => {
    const videoToEdit = videoData.find((video) => video.id === id);
    setEditVideoData(videoToEdit);
    setFormEditIsOpenId(id);
  };

  const openModalDelete = (id) => {
    console.log(id);
    setOpenModalDeleteId(id);
  };

  useEffect(() => {
    fetchAllVideoContent();
  }, [openModalDeleteId, formEditIsOpenId]);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!videoData || videoData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data Video Found</div>;
  }

  return (
    <div className="py-5 lg:py-16">
      <div>
        <p className="text-xl font-bold text-primary-blue border-b-2 w-fit p-2 border-primary-blue">All Videos</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 py-10">
        {videoData.map((video) => (
          <VideoContentInfoCard key={video.id} {...video} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
        ))}
      </div>
      <DeleteModal open={openModalDeleteId !== null} onClose={handleCloseModalDelete} onConfirm={handleDeleteConfirm} title="Apa anda yakin ingin menghapus Video ini ?" description="Data-data terkait Video akan terhapus secara permanen." />
      <FormEditModalVideo open={formEditIsOpenId !== null} onClose={handleCloseFormEdit} videoData={editVideoData} />
    </div>
  );
}
