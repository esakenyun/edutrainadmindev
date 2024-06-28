import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import ReactPaginate from "react-paginate";
import DeleteModal from "../modal/DeleteModal";
import AdminCardSkeleton from "../skeleton/AdminCardSkeleton";

const ITEMS_PER_PAGE = 8;

const TrainerInfoCard = ({ id, email, fullname, username, phone, isOpen, toggleDropdown, openModalDelete, openModalEdit }) => {
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
          <p className="text-sm font-semibold w-32">{email}</p>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-32 z-10">
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

export default function TrainerCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [trainerDropdown, setTrainerDropdown] = useState({});
  const [trainerData, setTrainerData] = useState([]);
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

  const fetchAllTrainer = () => {
    const response = [
      {
        id: "1",
        email: "trainer@example.com",
        fullname: "Trainer 1",
        username: "trainer1",
        phone: 312312312,
      },
      {
        id: "2",
        email: "trainer@example.com",
        fullname: "Trainer 2",
        username: "trainer2",
        phone: 31212312,
      },
      {
        id: "3",
        email: "trainer@example.com",
        fullname: "Trainer 3",
        username: "trainer3",
        phone: 31212312,
      },
      {
        id: "4",
        email: "trainer@example.com",
        fullname: "Trainer 4",
        username: "trainer4",
        phone: 31212312,
      },
      {
        id: "5",
        email: "trainer@example.com",
        fullname: "Trainer 5",
        username: "trainer5",
        phone: 31212312,
      },
      {
        id: "6",
        email: "trainer@example.com",
        fullname: "Trainer 6",
        username: "trainer6",
        phone: 31212312,
      },
      {
        id: "7",
        email: "trainer@example.com",
        fullname: "Trainer 7",
        username: "trainer7",
        phone: 31212312,
      },
      {
        id: "8",
        email: "trainer@example.com",
        fullname: "Trainer 8",
        username: "trainer8",
        phone: 31212312,
      },
      {
        id: "9",
        email: "trainer@example.com",
        fullname: "Trainer 9",
        username: "trainer9",
        phone: 31212312,
      },
      {
        id: "10",
        email: "trainer@example.com",
        fullname: "Trainer 10",
        username: "trainer10",
        phone: 31212312,
      },
    ];
    setTimeout(() => {
      setTrainerData(response);
      setLoading(false);
    }, 2000);
  };

  const handleDeleteConfirm = () => {
    //   console.log("Deleting user with id:", openModalDeleteId);
    // const response = await handleDeleteAdminAccount(openModalDeleteId);
    console.log(openModalDeleteId);
    setOpenModalDeleteId(null);
    // router.refresh();
  };

  useEffect(() => {
    fetchAllTrainer();
  }, [openModalDeleteId, formEditIsOpenId]);

  const toggleDropdown = (id) => {
    setTrainerDropdown((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setFormEditIsOpenId(null);
    setOpenModalDeleteId(null);
  };

  const openModalEdit = (id) => {
    const userToEdit = trainerData.find((user) => user.id === id);
    setEditUserData(userToEdit);
    setFormEditIsOpenId(id);
  };

  const openModalDelete = (id) => {
    setOpenModalDeleteId(id);
  };

  if (loading) {
    return <AdminCardSkeleton />;
  }

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = trainerData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = trainerData.length > ITEMS_PER_PAGE;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {currentPageData.map((trainer) => (
          <TrainerInfoCard key={trainer.id} {...trainer} isOpen={trainerDropdown[trainer.id]} toggleDropdown={toggleDropdown} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
        ))}
      </div>
      {shouldRenderPagination && (
        <div className="py-5">
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            pageCount={Math.ceil(trainerData.length / ITEMS_PER_PAGE)}
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
      {/* <FormEditModalAdmin open={formEditIsOpenId !== null} onClose={handleCloseFormEdit} userData={editUserData} /> */}
    </div>
  );
}
