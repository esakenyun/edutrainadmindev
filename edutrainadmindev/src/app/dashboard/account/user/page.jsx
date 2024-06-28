"use client";
import Dropdown from "@/components/dropdown/dropdown";
import FormModalUser from "@/components/modal/FormModalUser";
import UserTable from "@/components/table/UserTable";
import { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function UserAccount() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="py-7">
        <div className="flex items-center gap-2 justify-between">
          <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Daftar User</div>
          <div className="flex items-center gap-5">
            <div className="relative text-gray-600 focus-within:text-gray-400 border border-gray-500 rounded-md w-28 md:w-fit">
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <FiSearch />
                </button>
              </span>
              <input
                type="text"
                name="querysearch"
                className="py-2.5 text-xs md:text-sm text-white px-2 rounded-md pl-2 w-[110px] md:w-fit focus:outline-none focus:bg-white  focus:text-gray-900"
                placeholder="Cari User..."
                autoComplete="off"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
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
              <BsFillPersonPlusFill className="h-6 w-6" />
              Tambahkan User
            </button>
            <FormModalUser isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <div className="py-12">
          <UserTable searchName={searchQuery} />
        </div>
      </div>
    </>
  );
}
