import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import Searchbar from "@/components/searchbar/searchbar";
import Dropdown from "@/components/dropdown/dropdown";
import AdminCard from "@/components/card/AdminCard";
import FormModalAdmin from "@/components/modal/FormModalAdmin";
export default function AdminAccountPageComponent({ props }) {
  const toggleDropdown = props.toggleDropdown;
  const isDropdownOpen = props.isDropdownOpen;

  const openModal = props.openModal;
  const isModalOpen = props.isModalOpen;
  const closeModal = props.closeModal;

  return (
    <>
      <div className="py-7">
        <div className="flex items-center gap-2 justify-between">
          <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Daftar Admin</p>
          <div className="flex items-center gap-5">
            <Searchbar placeholder={"Cari admin..."} />
            <div className="relative z-50">
              <button onClick={toggleDropdown} className="py-2 px-2 flex items-center gap-2 bg-primary-blue text-white rounded-md">
                Filter
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {isDropdownOpen && (
                <div className="absolute top-12 p-2 bg-white border rounded-md shadow-md">
                  <Dropdown />
                </div>
              )}
            </div>
            <button onClick={openModal} className="hidden md:flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105">
              <FaUserPlus className="h-6 w-6" />
              Tambahkan Admin
            </button>
            <FormModalAdmin isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <div className="py-6">
          <AdminCard />
        </div>
      </div>
    </>
  );
}
