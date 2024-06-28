import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import ReactPaginate from "react-paginate";
import DeleteModal from "../modal/DeleteModal";
import FormEditModalAdmin from "../modal/FormEditModalAdmin";
import { handleDeleteAdminAccount, handleFecthAdminAccountData } from "@/helpers/adminAccountHelper";
import { toast } from "sonner";
import AdminCardSkeleton from "../skeleton/AdminCardSkeleton";

const ITEMS_PER_PAGE = 8;

const AdminInfoCard = ({ id, email, fullname, username, phone, isOpen, toggleDropdown, openModalDelete, openModalEdit }) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-primary-white shadow-lg py-5">
        <div className="flex items-center relative">
          <Image src="/noavatar.png" width={70} height={70} className="rounded-3xl w-auto h-auto border border-collapse border-black" alt="Admin Avatar" priority />
          <IoMdMore className="absolute text-3xl mb-16 ml-32 text-secondary-grey cursor-pointer" onClick={() => toggleDropdown(id)} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold">{fullname}</h1>
          <p className="text-sm text-secondary-grey">{username || "Not Username"}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl py-3 px-3 bg-secondary-light">
            <FaPhoneAlt className="text-primary-blue" />
          </div>
          <p className="text-sm font-semibold w-32">{phone || "Not Phone"}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl py-3 px-3 bg-secondary-light">
            <FaEnvelope className="text-primary-blue" />
          </div>
          <p className="text-sm font-semibold w-32 break-all">{email}</p>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-24 z-10">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => openModalEdit(id)}>
            Edit
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => openModalDelete(id)}>
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

export default function AdminCard() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [adminDropdown, setAdminDropdown] = useState({});
  const [adminData, setAdminData] = useState([]);
  const [openModalDeleteId, setOpenModalDeleteId] = useState(null);
  const [formEditIsOpenId, setFormEditIsOpenId] = useState(null);
  const [editUserData, setEditUserData] = useState(null);

  const handleCloseModalDelete = () => {
    setOpenModalDeleteId(null);
  };

  const handleCloseFormEdit = () => {
    setFormEditIsOpenId(null);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const fetchAllAdmin = async () => {
    const response = await handleFecthAdminAccountData();
    setTimeout(() => {
      setAdminData(response); // Setelah mendapatkan response, set data admin
      setLoading(false); // Setelah 3 detik, set loading menjadi false
    }, 2000);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteAdminAccount(openModalDeleteId);
    console.log(response);
    if (response.status === 200) {
      toast.success("Admin Account Deleted Successfully");
      window.location.reload();
    }
    if (response === false) {
      toast.error("Admin Account Not Deleted");
    }
    setOpenModalDeleteId(null);
    router.refresh();
  };

  useEffect(() => {
    fetchAllAdmin();
  }, [openModalDeleteId, formEditIsOpenId]);

  const toggleDropdown = (id) => {
    setAdminDropdown((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setFormEditIsOpenId(null);
    setOpenModalDeleteId(null);
  };

  const openModalEdit = (id) => {
    const userToEdit = adminData.find((user) => user.id === id);
    setEditUserData(userToEdit);
    setFormEditIsOpenId(id);
  };

  const openModalDelete = (id) => {
    setOpenModalDeleteId(id);
  };

  if (loading) {
    return <AdminCardSkeleton />;
    // return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = adminData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = adminData.length > ITEMS_PER_PAGE;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {currentPageData.map((admin) => (
          <AdminInfoCard key={admin.id} {...admin} isOpen={adminDropdown[admin.id]} toggleDropdown={toggleDropdown} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
        ))}
      </div>
      {shouldRenderPagination && (
        <div className="py-5">
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            pageCount={Math.ceil(adminData.length / ITEMS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center mt-4 gap-5"
            pageClassName="py-1 rounded-full px-3 border-2 text-secondary-grey relative"
            activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-cool-blueactive text-white font-bold"
          />
        </div>
      )}
      <DeleteModal open={openModalDeleteId !== null} onClose={handleCloseModalDelete} onConfirm={handleDeleteConfirm} title="Apa anda yakin ingin menghapus akun ini?" description="Data-data terkait akun akan terhapus secara permanen." />
      <FormEditModalAdmin open={formEditIsOpenId !== null} onClose={handleCloseFormEdit} userData={editUserData} />
    </div>
  );
}
