"use client";
import AdminAccountPageComponent from "@/components/pages/account/AdminAccountPageComponent";
import { useState } from "react";

export default function AdminAccount() {
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
      <AdminAccountPageComponent
        props={{
          toggleDropdown: toggleDropdown,
          isDropdownOpen: isDropdownOpen,
          openModal: openModal,
          isModalOpen: isModalOpen,
          closeModal: closeModal,
        }}
      />
    </>
  );
}
