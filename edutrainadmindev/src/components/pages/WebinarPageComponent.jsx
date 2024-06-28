import WebinarCard from "@/components/card/WebinarCard";
import Dropdown from "@/components/dropdown/dropdown";
import FormModalWebinar from "@/components/modal/FormModalWebinar";
import Searchbar from "@/components/searchbar/searchbar";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function WebinarPageComponent({ props }) {
  const isDropdownOpen = props.isDropdownOpen;
  const toggleDropdown = props.toggleDropdown;

  const isModalOpen = props.isModalOpen;
  const openModal = props.openModal;
  const closeModal = props.closeModal;

  return (
    <div className="py-7">
      <div className="flex items-center gap-2 justify-between">
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Webinar</p>
        <div className="flex items-center gap-5">
          <Searchbar placeholder={"Cari Webinar..."} />
          <div className="relative">
            <button onClick={toggleDropdown} className="hidden py-2 px-2 md:flex items-center gap-2 bg-primary-blue text-white rounded-md">
              Urut Berdasarkan
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 p-2 bg-white border rounded-md shadow-md z-50">
                <Dropdown />
              </div>
            )}
          </div>
          <button onClick={openModal} className="hidden md:flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105">
            <FaLaptopCode className="h-6 w-6" />
            Tambahkan Webinar
          </button>
          <FormModalWebinar isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="py-12 px-5 md:px-28">
        <WebinarCard />
      </div>
    </div>
  );
}
