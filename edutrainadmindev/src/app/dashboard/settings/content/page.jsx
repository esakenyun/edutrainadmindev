"use client";
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import FormModalFAQ from "@/components/modal/FormModalFAQ";
import FAQCard from "@/components/card/FAQCard";
import VideoContentCard from "@/components/card/VideoContentCard";
import FormModalVideo from "@/components/modal/FormModalVideo";
import { LuImagePlus } from "react-icons/lu";
import BannerCard from "@/components/card/BannerCard";
import FormModalBanner from "@/components/modal/FormModalBanner";

const BannerSettings = ({ isModalOpen, closeModal, openModal }) => (
  <div>
    {/* <div className="py-6">
      <h1 className="text-md text-[#4C535F]">Banner</h1>
      <div className="pt-2 pb-3">
        <form action="#">
          <label htmlFor="profileImg" className="flex flex-col gap-5 w-full items-center py-28 px-3 rounded-3xl border border-dashed border-[#4C535F] cursor-pointer text-secondary-grey bg-[#EDF2F6]">
            <LuImagePlus className="text-5xl" />
            <span className="text-sm">Unggah Gambar</span>
            <span className="sr-only">Choose File</span>
            <input type="file" name="profileImg" id="profileImg" className="hidden" />
          </label>
          <div className="py-4 flex gap-5">
            <button className="py-2 px-3 border rounded-xl bg-primary-blue text-primary-white hover:scale-105">Simpan</button>
            <button className="text-[#4C535F] ">Batalkan</button>
          </div>
        </form>
      </div>
    </div> */}
    <div className="py-2">
      <div className="pt-5">
        <button className="flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105" onClick={openModal}>
          <LuImagePlus className="h-6 w-6" />
          Tambahkan Banner
        </button>
        <FormModalBanner isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
    <BannerCard />
  </div>
);

const VideoSettings = ({ isModalOpen, closeModal, openModal }) => (
  <div>
    {/* <form>
      <div className="grid lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="py-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="video1" className="text-[#4C535F]">
                Tautan Video 1
              </label>
              <input type="text" id="video1" name="video1" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan Tautan Video.." />
            </div>
            <div className="pt-5 flex flex-col gap-2">
              <label htmlFor="video2" className="text-[#4C535F]">
                Tautan Video 2
              </label>
              <input type="text" id="video2" name="video2" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan Tautan Video.." />
            </div>
          </div>
        </div>
        <div>
          <div className="py-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="video3" className="text-[#4C535F]">
                Tautan Video 3
              </label>
              <input type="text" id="video3" name="video3" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan Tautan Video.." />
            </div>
            <div className="pt-5 flex flex-col gap-2">
              <label htmlFor="video4" className="text-[#4C535F]">
                Tautan Video 4
              </label>
              <input type="text" id="video4" name="video4" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan Tautan Video.." />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex gap-5">
        <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg hover:scale-105">Simpan</button>
        <button className="text-secondary-grey">Batalkan</button>
      </div>
    </form> */}
    <div>
      <div className="py-2">
        <div className="pt-5">
          <button className="flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105" onClick={openModal}>
            <FaVideo className="h-6 w-6" />
            Tambahkan Video
          </button>
          <FormModalVideo isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <VideoContentCard />
    </div>
  </div>
);

const FAQSettings = ({ isModalOpen, closeModal, openModal }) => (
  <div className="py-2">
    <div className="pt-5">
      <button className="flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105" onClick={openModal}>
        <FaQuestionCircle className="h-6 w-6" />
        Tambahkan FAQ
      </button>
      <FormModalFAQ isOpen={isModalOpen} onClose={closeModal} />
    </div>
    <div className="py-12 ">
      <FAQCard />
    </div>
  </div>
);

// const pageTitles = {
//   banner: "Banner",
//   video: "Video",
//   faq: "FAQ",
// };

export default function SettingsContent() {
  const [selectedTab, setSelectedTab] = useState("banner");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenVideo, setModalOpenVideo] = useState(false);
  const [isModalOpenBanner, setModalOpenBanner] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalVideo = () => {
    setModalOpenVideo(true);
  };

  const closeModalVideo = () => {
    setModalOpenVideo(false);
  };
  const openModalBanner = () => {
    setModalOpenBanner(true);
  };

  const closeModalBanner = () => {
    setModalOpenBanner(false);
  };

  return (
    <>
      <div className="py-7">
        <div className="flex items-center justify-between">
          <p className="py-2 px-2 mb-4 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Settings</p>
          <div>
            <div className="lg:hidden items-center">
              <label htmlFor="Tab" className="sr-only"></label>
              <select id="Tab" name="Tab" className="w-full rounded-md border-gray-200 mb-3 py-2" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
                <option value="banner">Banner</option>
                <option value="video">Video</option>
                <option value="faq">FAQ</option>
              </select>
            </div>
            <div className="hidden lg:block">
              <nav className="-mb-px flex gap-6" aria-label="Tabs">
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "banner" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("banner")}>
                  Banner
                </div>
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "video" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("video")}>
                  Video
                </div>
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "faq" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("faq")}>
                  FAQ
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div>
          {selectedTab === "banner" && <BannerSettings isModalOpen={isModalOpenBanner} closeModal={closeModalBanner} openModal={openModalBanner} />}
          {selectedTab === "video" && <VideoSettings isModalOpen={isModalOpenVideo} closeModal={closeModalVideo} openModal={openModalVideo} />}
          {selectedTab === "faq" && <FAQSettings isModalOpen={isModalOpen} closeModal={closeModal} openModal={openModal} />}
        </div>
      </div>
    </>
  );
}
