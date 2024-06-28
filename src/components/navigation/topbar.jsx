import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition, Popover } from "@headlessui/react";
import { FiCheck, FiMenu } from "react-icons/fi";
import { FaPencilAlt, FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/helpers/authHelper";

export default function Topbar({ showNav, setShowNav }) {
  const router = useRouter();

  const handleSubmit = async () => {
    if (await handleLogout()) {
      router.push("/auth");
    }
  };
  return (
    // Heightnya ngikutin Figma
    <div className={`fixed w-full h-20 flex justify-between items-center bg-primary-blue z-30 transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}>
      <div className="pl-4 md:pl-16">
        <FiMenu className={`h-7 w-7 text-primary-white cursor-pointer ${!showNav ? "block" : "hidden"}`} onClick={() => setShowNav(!showNav)} />
      </div>

      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-14 cursor-pointer text-primary-white">
            <FaRegEnvelope className="h-7 w-7" />
          </Popover.Button>
          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform scale-95" enterTo="transform scale-100" leave="transition ease-in duration=75" leaveFrom="transform scale-100" leaveTo="transform scale-95">
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-14 cursor-pointer text-primary-white">
            <FaRegBell className="h-7 w-7" />
          </Popover.Button>
          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform scale-95" enterTo="transform scale-100" leave="transition ease-in duration=75" leaveFrom="transform scale-100" leaveTo="transform scale-95">
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <FiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Notification Title</p>
                      <p className="text-sm text-gray-500 truncate">Test Notification text for design</p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <FaRegCircleUser className="h-7 w-7 text-primary-white" />
              {/* <picture>
                <Image src="/noavatar.png" width={30} height={30} className="rounded-full md:mr-4 border-2 border-gray-600 shadow-sm" alt="Avatar" />
              </picture>

              <FiChevronDown className="ml-2 h-4 w-4 text-gray-700" /> */}
            </Menu.Button>
          </div>
          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform scale-95" enterTo="transform scale-100" leave="transition ease-in duration=75" leaveFrom="transform scale-100" leaveTo="transform scale-95">
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link href="/admin/dashboard/settings/profile" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                    <FaPencilAlt className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button onClick={handleSubmit} className="flex hover:bg-red-600 w-full hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                    <MdLogout className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
