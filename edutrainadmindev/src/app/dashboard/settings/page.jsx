"use client";
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import FormModalFAQ from "@/components/modal/FormModalFAQ";
import FAQCard from "@/components/card/FAQCard";

const AccountSettings = () => (
  <div>
    <div className="py-6">
      <h1 className="text-md text-[#4C535F]">Foto Profil</h1>
      <div className="pt-2 pb-3 border-b-2 border-[#E0E4EC] ">
        <form action="#">
          <label htmlFor="profileImg" className="flex flex-col gap-5 w-52 items-center py-16 px-3 rounded-3xl border border-dashed border-[#4C535F] cursor-pointer text-secondary-grey">
            <LuImagePlus className="text-5xl" />
            <span className="text-sm">Upload Your Photo</span>
            <span className="sr-only">Choose File</span>
            <input type="file" name="profileImg" id="profileImg" className="hidden" />
          </label>
          <div className="py-4 flex gap-5">
            <button className="py-2 px-3 border border-secondary-grey rounded-xl bg-primary-blue text-primary-white font-bold">Simpan</button>
            <button className="text-[#4C535F] ">Batalkan</button>
          </div>
        </form>
      </div>
      <div className="py-6">
        <form action="#">
          <div className="flex flex-col gap-2">
            <label htmlFor="NamaLengkap" className="text-[#4C535F]">
              Nama Lengkap
            </label>
            <input type="text" id="NamaLengkap" name="NamaLengkap" className="py-3 px-3 md:w-96 lg:w-[519px] rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan nama lengkap anda" />
          </div>
          <div className="pt-5 flex flex-col gap-2">
            <label htmlFor="NamaPengguna" className="text-[#4C535F]">
              Nama Pengguna
            </label>
            <input type="text" id="NamaPengguna" name="NamaPengguna" className="py-3 px-3 md:w-96 lg:w-[519px] rounded-md border border-[#E0E4EC] bg-primary-white text-sm" placeholder="Masukkan nama pengguna  anda" />
          </div>
          <div className="pt-8 flex gap-5">
            <button className="py-2 px-4 text-primary-white font-bold bg-primary-blue rounded-lg">Perbarui Profil</button>
            <button className="text-[#4C535F] ">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const Security = () => (
  <div className="grid lg:grid-cols-2 gap-14">
    <div>
      <h1 className="py-2 px-3 border-b-2 w-[186px] border-primary-blue text-xl font-bold text-primary-blue">Ubah Kata Sandi</h1>
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
            <button className="py-2 px-4 text-primary-white font-bold bg-primary-blue rounded-lg">Perbarui Kata Sandi</button>
            <button className="text-[#4C535F]">Reset</button>
          </div>
        </form>
      </div>
    </div>
    <div>
      <h1 className="py-2 px-3 border-b-2 w-[211px] border-primary-blue text-xl font-bold text-primary-blue">Ubah Alamat Email</h1>
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
            <button className="py-2 px-4 text-primary-white font-bold bg-primary-blue rounded-lg">Perbarui Email</button>
            <button className="text-[#4C535F] ">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const Notifications = ({ isModalOpen, closeModal, openModal }) => (
  <div className="py-7">
    <div className="flex items-center gap-2 justify-between">
      <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">FAQ</div>
      <button className="hidden md:flex items-center gap-2 py-2 px-6 rounded-md bg-primary-blue text-primary-white hover:scale-105" onClick={openModal}>
        <FaQuestionCircle className="h-6 w-6" />
        Tambahkan FAQ
      </button>
      <FormModalFAQ isOpen={isModalOpen} onClose={closeModal} />
    </div>
    <div className="py-12 px-3">
      <FAQCard />
    </div>
  </div>
);

const pageTitles = {
  settings: "Profil",
  security: "Pengaturan Akun",
  notifications: "Pemberitahuan",
};

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState("settings");
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
          <p className="py-2 px-2 mb-4 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue"> {pageTitles[selectedTab]}</p>
          <div>
            <div className="lg:hidden items-center">
              <label htmlFor="Tab" className="sr-only"></label>
              <select id="Tab" name="Tab" className="w-full rounded-md border-gray-200 mb-3 py-2" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
                <option value="settings">Pengaturan Akun</option>
                <option value="security">Login & Keamanan</option>
                <option value="notifications">Pemberitahuan</option>
              </select>
            </div>
            <div className="hidden lg:block">
              <nav className="-mb-px flex gap-6" aria-label="Tabs">
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "settings" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("settings")}>
                  Pengaturan Akun
                </div>
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "security" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("security")}>
                  Login & Keamanan
                </div>
                <div
                  className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
                    selectedTab === "notifications" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("notifications")}>
                  Pemberitahuan
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div>
          {selectedTab === "settings" && <AccountSettings />}
          {selectedTab === "security" && <Security />}
          {selectedTab === "notifications" && <Notifications isModalOpen={isModalOpen} closeModal={closeModal} openModal={openModal} />}
        </div>
      </div>
    </>
    /* <div>
        <div className="items-center md:flex py-4">
          <p className="text-gray-700 text-3xl w-full px-2  font-bold">Profile</p>
          <div className="md:mr-[4rem] mt-2 px-2 py-1 flex items-center text-gray-500 md:px-0 md:mt-0 md:bg-transparent bg-primary-white rounded-md  ">
            <FaTachometerAlt />
            &nbsp;&nbsp;
            <Link href="/dashboard" className="text-black hover:text-blue-300">
              Home
            </Link>
            &nbsp;&gt;&nbsp;
            <Link href="/dashboard/profile" className="text-black hover:text-blue-300">
              Profile
            </Link>
            &nbsp;&gt;&nbsp;<span>Profile</span>
          </div>
        </div>
        <div className="py-5 mx-2">
          <div className="bg-white rounded-sm py-5 border-t-4 border-gray-400">
            <div className="mx-7 flex gap-3">
              <h1 className="md:text-2xl text-secondary-dark">Profile</h1>
              <h1 className="md:text-2xl text-secondary-dark">1217050120</h1>
            </div>
            <div className="md:flex py-5">
              <img src="/noavatar.png" alt="" className="w-40 py-3 border-2 border-gray-400 mx-7" />
              <div className="mt-5 mx-5 md:mt-0 mx:0 flex flex-col md:w-full">
                <div className="flex flex-col gap-2">
                  <table>
                    <tbody>
                      <tr className="border-b-2 border-t-2 border-r-2 border-l-2 md:border-r-0 md:border-l-0 hover:bg-gray-200">
                        <th className="text-sm font-bold pl-2 text-left py-2">Username</th>
                        <td className="text-sm ">1217050120</td>
                      </tr>
                      <tr className="border-b-2 border-r-2 border-l-2 md:border-r-0 md:border-l-0 hover:bg-gray-200">
                        <th className="text-sm font-bold  pl-2 text-left py-2">First Name</th>
                        <td className="text-sm ">Reza Fahlevi</td>
                      </tr>
                      <tr className="border-b-2 border-r-2 border-l-2 md:border-r-0 md:border-l-0 hover:bg-gray-200">
                        <th className="text-sm font-bold  pl-2 text-left py-2">Last Name</th>
                        <td className="text-sm">Herdiyanto</td>
                      </tr>
                      <tr className="border-b-2 border-r-2 border-l-2 md:border-r-0 md:border-l-0 hover:bg-gray-200">
                        <th className="text-sm font-bold  pl-2 text-left py-2">Email</th>
                        <td className="text-sm">rfahlevih@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 flex gap-3 text-sm">
                  <Link href="/dashboard/profile/edit" className="py-2 bg-blue-600 px-2 text-white rounded-md hover:bg-blue-300">
                    Ubah Profile
                  </Link>
                  <button className="py-2 y-2 bg-blue-600 px-2 text-white rounded-md hover:bg-blue-300">Ubah Password</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
  );
}
