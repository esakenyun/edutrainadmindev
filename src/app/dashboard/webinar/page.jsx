"use client";

import WebinarPageComponent from "@/components/pages/webinar/WebinarPageComponent";
import { useState } from "react";

export default function Webinar() {
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
      <WebinarPageComponent
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
