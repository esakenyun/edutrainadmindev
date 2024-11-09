"use client";
import TrainingPageComponent from "@/components/pages/training/TrainingPageComponent";
import { useState } from "react";

export default function Training() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <TrainingPageComponent
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
