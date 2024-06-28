"use client";
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";

const AccountSettings = () => (
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row lg:gap-32 items-start">
      <div className="py-6">
        <h1 className="text-md text-[#4C535F] lg:ml-8">Your Profile Picture</h1>
        <div className="pt-2 pb-3">
          <form action="#">
            <label htmlFor="profileImg" className="flex flex-col gap-5 w-48 items-center py-10 px-3 rounded-3xl border border-dashed border-[#4C535F] cursor-pointer text-secondary-grey">
              <LuImagePlus className="text-5xl" />
              <span className="text-sm">Upload Your Photo</span>
              <span className="sr-only">Choose File</span>
              <input type="file" name="profileImg" id="profileImg" className="hidden" />
            </label>
            <div className="py-4 flex gap-5">
              <button className="py-2 px-3 border border-secondary-grey rounded-xl bg-primary-blue text-primary-white">Simpan</button>
              <button className="text-secondary-grey">Batalkan</button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:py-6 flex-1">
        <form action="#" className="pt-3">
          <div className="flex gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="NamaDepan" className="text-[#4C535F]">
                Nama Depan
              </label>
              <input type="text" id="NamaDepan" name="NamaDepan" className="py-3 w-full px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Dian" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="NamaBelakang" className="text-[#4C535F]">
                Nama Belakang
              </label>
              <input type="text" id="NamaBelakang" name="NamaBelakang" className="py-3 w-full px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Saputra" />
            </div>
            <div className="flex items-center mt-8">
              <button className="py-2 px-5 text-primary-white bg-primary-blue rounded-lg">Ubah</button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="pt-5 flex flex-col gap-2 w-full">
              <label htmlFor="username" className="text-[#4C535F]">
                Username
              </label>
              <input type="text" id="username" name="username" className="py-3 px-3 w-full rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Dayen" />
            </div>
            <div className="flex items-center mt-12">
              <button className="py-2 px-5 text-primary-white bg-primary-blue rounded-lg">Ubah</button>
            </div>
          </div>
          <div className="pt-8 flex gap-5">
            <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Perbarui Profil</button>
            <button className="text-secondary-grey">Batalkan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const Security = () => (
  <div>
    <div className="grid lg:grid-cols-2 lg:gap-14">
      <div className="lg:pr-3">
        <h1 className="py-2 px-3 border-b-2 w-fit border-primary-blue text-base font-bold text-primary-blue">Ubah Alamat Email</h1>
        <div className="py-5">
          <form action="#">
            <div className="flex flex-col gap-2">
              <label htmlFor="EmailLama" className="text-[#4C535F]">
                Email Lama
              </label>
              <input type="text" id="EmailLama" name="EmailLama" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan email lama anda" />
            </div>
            <div className="pt-5 flex flex-col gap-2">
              <label htmlFor="EmailBaru" className="text-[#4C535F]">
                Email Baru
              </label>
              <input type="text" id="EmailBaru" name="EmailBaru" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan email baru anda" />
            </div>
            <div className="pt-8 flex gap-5">
              <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Perbarui Email</button>
              <button className="text-secondary-grey">Batalkan</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1 className="py-2 px-3 border-b-2 w-fit border-primary-blue text-base font-bold text-primary-blue">Ubah Kata Sandi</h1>
        <div className="py-5">
          <form action="#">
            <div className="flex flex-col gap-2">
              <label htmlFor="KataSandiLama" className="text-[#4C535F]">
                Kata Sandi Lama
              </label>
              <input type="text" id="KataSandiLama" name="KataSandiLama" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan kata sandi lama anda" />
            </div>
            <div className="pt-5 flex flex-col gap-2">
              <label htmlFor="KataSandiBaru" className="text-[#4C535F]">
                Kata Sandi Baru
              </label>
              <input type="text" id="KataSandiBaru" name="KataSandiBaru" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan kata sandi baru anda" />
            </div>
            <div className="pt-8 flex gap-5">
              <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Perbarui Kata Sandi</button>
              <button className="text-secondary-grey">Batalkan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:pr-10">
      <h1 className="py-2 px-3 border-b-2 w-fit border-primary-blue text-base font-bold text-primary-blue">Ubah Nomor Telepon</h1>
      <div className="py-5">
        <form action="#">
          <div className="flex flex-col gap-2">
            <label htmlFor="NomorTeleponLama" className="text-[#4C535F]">
              Nomor Telepon Lama
            </label>
            <input type="text" id="NomorTeleponLama" name="NomorTeleponLama" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="892123422" />
          </div>
          <div className="pt-5 flex flex-col gap-2">
            <label htmlFor="NomorTeleponBaru" className="text-[#4C535F]">
              Nomor Telepon Baru
            </label>
            <input type="text" id="NomorTeleponBaru" name="NomorTeleponBaru" className="py-3 px-3 rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan Nomor Telepon Baru" />
          </div>
          <div className="pt-8 flex gap-5">
            <button className="py-2 px-4 text-primary-white bg-primary-blue rounded-lg">Perbarui Nomor</button>
            <button className="text-secondary-grey">Batalkan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// const pageTitles = {
//   profile: "Profil",
//   security: "Keamanan",
// };

export default function SettingsProfile() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
                <option value="profile">Profil</option>
                <option value="security">Keamanan</option>
              </select>
            </div>
            <div className="hidden lg:block">
              <nav className="-mb-px flex gap-6" aria-label="Tabs">
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "profile" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("profile")}>
                  Profil
                </div>
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "security" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("security")}>
                  Keamanan
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div>
          {selectedTab === "profile" && <AccountSettings />}
          {selectedTab === "security" && <Security />}
        </div>
      </div>
    </>
  );
}
