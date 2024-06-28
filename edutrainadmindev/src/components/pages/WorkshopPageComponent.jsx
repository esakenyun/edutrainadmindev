import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import Searchbar from "@/components/searchbar/searchbar";
import Dropdown from "@/components/dropdown/dropdown";
import WorkshopCard from "@/components/card/WorkshopCard";
import FormModalWorkshop from "@/components/modal/FormModalWorkshop";

export default function WorkshopPageComponent({ props }) {
  const toggleDropdown = props.toggleDropdown;
  const isDropdownOpen = props.isDropdownOpen;

  const isModalOpen = props.isModalOpen;
  const openModal = props.openModal;
  const closeModal = props.closeModal;

  return (
    <div className="py-7">
      <div className="flex items-center gap-2 justify-between">
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Workshop</p>
        <div className="flex items-center gap-5">
          <Searchbar placeholder={"Cari workshop..."} />
          <div className="relative">
            <button onClick={toggleDropdown} className="hidden py-2 px-2 md:flex items-center gap-2 bg-primary-blue text-white rounded-md">
              Urut Berdasarkan
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <button onClick={toggleDropdown} className="md:hidden py-2 px-2 flex items-center gap-2 bg-primary-blue text-white rounded-md">
              Urutkan
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 p-2 bg-white border rounded-md shadow-md">
                <Dropdown />
              </div>
            )}
          </div>
          <button onClick={openModal} className="hidden md:flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105">
            <FaChalkboardTeacher className="h-6 w-6" />
            Tambahkan Workshop
          </button>
          <FormModalWorkshop isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="py-12 px-5 md:px-28">
        <WorkshopCard />
      </div>
    </div>
  );
}
