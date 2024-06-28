import { forwardRef, useState } from "react";
import Link from "next/link";
import { BiHome, BiUser } from "react-icons/bi";
import { FaChalkboardTeacher, FaLaptopCode, FaSignal } from "react-icons/fa";
import Image from "next/image";
import { DropdownItemSidebar, SidebarItem } from "./sidebarItem";
import { IoMdSettings } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FiMenu, FiShoppingBag } from "react-icons/fi";

const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsDropdown, setIsSettingsDropdown] = useState(false);
  const [isAccountActive, setIsAccountActive] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsAccountActive(!isAccountActive);
    if (isSettingsDropdown) {
      setIsSettingsDropdown(false);
      setIsSettingsActive(false);
    }
  };

  const handleSettingsDropdown = () => {
    setIsSettingsDropdown(!isSettingsDropdown);
    setIsSettingsActive(!isSettingsActive);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setIsAccountActive(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.scrollTop > 0) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  return (
    <div
      id="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onScroll={handleScroll}
      ref={ref}
      className={`fixed w-56 h-full
     bg-primary-darkblue shadow-sm overflow-y-auto z-40 transition-all duration-300 ${showNav ? "left-0" : "-left-56"} ${isHovered ? "overflow-y-auto" : "overflow-y-hidden"}`}>
      <div className="pt-2 pr-2 flex justify-end items-center text-primary-white">
        <FiMenu className="h-7 w-7 cursor-pointer" onClick={() => setShowNav(!showNav)} />
      </div>
      <div className="flex justify-center">
        <Link href="/dashboard">
          <Image src="/logo.png" quality={100} height={500} width={500} alt="Company Logo" className="w-40 h-40" priority />
          {/* <p className="text-center font-bold text-white">Admin EDUTRAIN</p> */}
        </Link>
      </div>
      <div className="flex flex-col">
        <SidebarItem href="/dashboard" text="Dashboard" icon={BiHome} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <div>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              isAccountActive ? "bg-secondary-activeblue font-bold rounded-md text-primary-white" : "text-gray-400 hover:bg-secondary-activeblue hover:rounded-md hover:text-primary-white"
            }`}
            onClick={handleToggleDropdown}>
            <div className="mr-2">
              <BiUser className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="relative top-full pl-10 pr-5 mt-1">
              <DropdownItemSidebar href="/dashboard/account/admin" text="Admin" icon={BiUser} />
              <DropdownItemSidebar href="/dashboard/account/trainer" text="Trainer" icon={BiUser} />
              <DropdownItemSidebar href="/dashboard/account/user" text="User" icon={BiUser} />
            </div>
          )}
        </div>

        <SidebarItem href="/dashboard/jobrole" text="Job Role" icon={IoBagRemoveOutline} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <SidebarItem href="/dashboard/webinar" text="Webinar" icon={FaLaptopCode} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <SidebarItem href="/dashboard/workshop" text="Workshop" icon={FaChalkboardTeacher} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <SidebarItem href="/dashboard/training" text="Training" icon={FaSignal} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <SidebarItem href="/dashboard/order" text="Order" icon={FiShoppingBag} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} />
        <div>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              isSettingsActive ? "bg-secondary-activeblue font-bold rounded-md text-primary-white" : "text-gray-400 hover:bg-secondary-activeblue hover:rounded-md hover:text-primary-white"
            }`}
            onClick={handleSettingsDropdown}>
            <div className="mr-2">
              <IoMdSettings className="h-5 w-5" />
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
          {isSettingsDropdown && (
            <div className="relative top-full pl-10 pr-5 mt-1">
              <DropdownItemSidebar href="/dashboard/settings/profile" text="Profile" icon={BiUser} />
              <DropdownItemSidebar href="/dashboard/settings/content" text="Content" icon={BiUser} />
              <DropdownItemSidebar href="/dashboard/settings/membership" text="Membership" icon={BiUser} />
            </div>
          )}
        </div>
        {/* <SidebarItem href="/dashboard/settings" text="Settings" icon={IoMdSettings} onItemClick={() => [setIsDropdownOpen(false), setIsAccountActive(false), setIsSettingsDropdown(false), setIsSettingsActive(false)]} /> */}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
