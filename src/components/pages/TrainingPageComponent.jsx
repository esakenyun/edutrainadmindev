import TrainingCard from "../card/TrainingCard";
import Dropdown from "../dropdown/dropdown";
import FormModalTraining from "../modal/FormModalTraining";
import Searchbar from "../searchbar/searchbar";
import { FaSignal } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function TrainingPageComponent({ props }) {
  const isDropdownOpen = props.isDropdownOpen;
  const toggleDropdown = props.toggleDropdown;

  const isModalOpen = props.isModalOpen;
  const openModal = props.openModal;
  const closeModal = props.closeModal;

  return (
    <div className="py-7">
      <div className="flex items-center gap-2 justify-between">
        <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Training</div>
        <div className="flex items-center gap-5">
          <Searchbar placeholder={"Cari Training..."} />
          <div className="relative">
            <button onClick={toggleDropdown} className="hidden py-2 px-2 md:flex items-center gap-2 bg-primary-blue text-white rounded-md">
              Urut Berdasarkan
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <button onClick={toggleDropdown} className="flex py-2 px-2 md:hidden items-center gap-2 bg-primary-blue text-white rounded-md">
              Urutkan
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 p-2 bg-white border rounded-md shadow-md z-50">
                <Dropdown />
              </div>
            )}
          </div>
          <button onClick={openModal} className="hidden md:flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white">
            <FaSignal className="h-6 w-6" />
            Tambahkan Training
          </button>
          <FormModalTraining isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="py-12 px-5 md:px-28">
        <TrainingCard />
      </div>
    </div>
  );
}
