"use client";
import TrainerAccountPageComponent from "@/components/pages/account/TrainerAccountPageComponent";
import { useState } from "react";

export default function TrainerAccount() {
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
    <TrainerAccountPageComponent
      props={{
        toggleDropdown: toggleDropdown,
        isDropdownOpen: isDropdownOpen,
        openModal: openModal,
        isModalOpen: isModalOpen,
        closeModal: closeModal,
      }}
    />
  );
}
