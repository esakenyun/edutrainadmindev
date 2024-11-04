"use client";

import WorkshopPageComponent from "@/components/pages/workshop/WorkshopPageComponent";
import { useState } from "react";

export default function Workshop() {
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
      <WorkshopPageComponent
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
