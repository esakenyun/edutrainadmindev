"use client";
import Dropdown from "@/components/dropdown/dropdown";
import Searchbar from "@/components/searchbar/searchbar";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import JobRoleCard from "@/components/card/JobRoleCard";

export default function JobRole() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="pt-7">
        <div className="flex items-center gap-2 justify-between">
          <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Job Role</div>
          <div className="flex items-center gap-5">
            <Searchbar placeholder={"Cari Jobrole..."} />
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
              <IoPersonCircleOutline className="h-6 w-6" />
              Tambahkan Job Role
            </button>
            {/* <FormModalWorkshop isOpen={isModalOpen} onClose={closeModal} /> */}
          </div>
        </div>
        <div className="py-12 px-5">
          <JobRoleCard />
        </div>
      </div>
    </>
  );
}
