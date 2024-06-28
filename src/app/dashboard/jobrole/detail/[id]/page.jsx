"use client";
import { useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";

export default function JobRoleDetail({ params }) {
  const test = () => {
    console.log(params);
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <p className="text-2xl lg:text-4xl font-bold">Cyber Security Manager</p>
          <div className="flex gap-3">
            <button className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-primary-blue rounded-lg hover:scale-105">
              <BsPencil />
              Ubah
            </button>
            <button className="flex items-center gap-3 text-primary-white py-2 px-[35px] bg-primary-blue rounded-lg hover:scale-105">
              <FaRegTrashAlt />
              Hapus
            </button>
          </div>
        </div>
        <div className="pt-3 pb-5 flex gap-2">
          <p>12 Skills</p>
          <p>|</p>
          <p>6 Courses</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-7 lg:px-3">
          <div className="lg:w-7/12 bg-primary-white rounded-lg shadow-xl py-3 px-3">
            <p className="font-bold text-xl">Deskripsi</p>
            <p>
              Cyber Security Manager memiliki peran dalam mengembangkan rencana strategis dan taktis untuk manajemen risiko keamanan informasi. Seorang Cyber Security Manager menetapkan kerangka kerja tata kelola keamanan informasi dengan
              tujuan memberikan jaminan bahwa strategi keamanan informasi konsisten dengan perundangan dan peraturan yang berlaku. Cyber Security Manager melakukan identifikasi inisiatif dan program keamanan utama melalui pendekatan
              berbasis risiko, mengomunikasikan inisiatif dan risiko keamanan kepada manajemen puncak dan pemangku kepentingan untuk memastikan bahwa risiko informasi dipahami dan diidentifikasi.
            </p>
            <p className="mt-5">Tugas Utama:</p>
            <div className="pl-7">
              <ul className="list-disc">
                <li>Mengidentifikasi persyaratan standar keamanan</li>
                <li>Memilih kendali keamanan secara tepat</li>
                <li>Menilai kesesuaian organisasi dengan standar keamanan yang digunakan</li>
                <li>Menguraikan langkah implementasi Sistem Manajemen Keamanan Informasi</li>
                <li>Mengenali sasaran keamanan informasi</li>
                <li>Menggambarkan model rancangan arsitektur keamanan</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-5/12 bg-primary-white rounded-lg shadow-xl py-3 px-3 h-fit">
            <p className="font-bold text-xl">Skills</p>
            <div className="pl-7">
              <ul className="list-disc">
                <li>Bisa mengidentifikasikan persyaratan standar ISO 27001</li>
                <li>Bisa menentukan berbagai dokumentasi sesuai ISO 27001</li>
                <li>Bisa memilih kendali ISO 27001 secara tepat</li>
                <li>Bisa menilai kesesuaian organisasi dengan standar ISO 27001</li>
                <li>Bisa menguraikan langkah implementasi Sistem Manajemen Keamanan Informasi</li>
                <li>Bisa mengenali sasaran keamanan informasi</li>
                <li>Bisa menjelaskan kerangka arsitektur keamanan SABSA</li>
                <li>Bisa mengidentifikasikan enam layer arsitektur keamanan</li>
                <li>Bisa mendesain rancangan arsitektur keamanan SABSA</li>
                <li>Bisa menentukan jenis kendali keamanan informasi</li>
                <li>Bisa menggambarkan model rancangan arsitektur keamanan</li>
                <li>Bisa menilai risiko keamanan informasi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 pb-10">
          <p className="text-lg">Produk Terkait dengan Cyber Security Manager</p>
          <div className="mt-2 flex gap-3">
            <button className="bg-primary-blue text-white text-sm py-1 px-2 rounded-md">Semua Kelas</button>
            <button className="bg-secondary-lightmedium text-secondary-greydark text-sm py-1 px-2 rounded-md">ISO 27001 Security Governance</button>
            <button className="bg-secondary-lightmedium text-secondary-greydark text-sm py-1 px-2 rounded-md">Enterprise Architecture Security with SABSA</button>
            <button className="bg-secondary-lightmedium text-secondary-greydark text-sm py-1 px-2 rounded-md">Information System Security Protection Knowledge</button>
          </div>
          {/* Webinar */}
          <div className="mt-5">
            <div className="flex gap-3 w-full items-center">
              <p className="bg-primary-blue font-bold text-primary-white px-[18px] py-2 rounded-md">Webinar</p>
              {/* Search Bar */}
              <input type="text" placeholder="Cari Webinar..." className="hidden text-sm bg-primary-white rounded-lg px-4 py-2 h-10 border-[1px] border-black outline-none md:block md:flex-1" />
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Filter
                <IoIosArrowDown />
              </div>
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Urutkan Berdasarkan
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-10 pb-3 flex flex-col justify-center items-center">
              <div className="py-4 px-4 border-[1px] border-secondary-grey rounded-2xl">
                <div className="py-2 px-2 rounded-full bg-secondary-grey">
                  <LuRefreshCw className="text-2xl  text-white" />
                </div>
              </div>
              <p className="py-3">Webinar Belum Tersedia.</p>
            </div>
          </div>
          {/* Workshop */}
          <div className="mt-5">
            <div className="flex gap-3 w-full items-center">
              <p className="bg-primary-blue font-bold text-primary-white px-3 py-2 rounded-md">Workshop</p>
              {/* Search Bar */}
              <input type="text" placeholder="Cari Workshop..." className="hidden text-sm bg-primary-white rounded-lg px-4 py-2 h-10 border-[1px] border-black outline-none md:block md:flex-1" />
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Filter
                <IoIosArrowDown />
              </div>
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Urutkan Berdasarkan
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-10 pb-3 flex flex-col justify-center items-center">
              <div className="py-4 px-4 border-[1px] border-secondary-grey rounded-2xl">
                <div className="py-2 px-2 rounded-full bg-secondary-grey">
                  <LuRefreshCw className="text-2xl  text-white" />
                </div>
              </div>
              <p className="py-3">Workshop Belum Tersedia.</p>
            </div>
          </div>
          {/* Training */}
          <div className="mt-5">
            <div className="flex gap-3 w-full items-center">
              <p className="bg-primary-blue font-bold text-primary-white px-5 py-2 rounded-md">Training</p>
              {/* Search Bar */}
              <input type="text" placeholder="Cari Training..." className="hidden text-sm bg-primary-white rounded-lg px-4 py-2 h-10 border-[1px] border-black outline-none  md:block md:flex-1" />
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Filter
                <IoIosArrowDown />
              </div>
              <div className="flex gap-2 bg-primary-blue items-center text-primary-white py-2 px-2 rounded-md text-sm">
                Urutkan Berdasarkan
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-10 pb-3 flex flex-col justify-center items-center">
              <div className="py-4 px-4 border-[1px] border-secondary-grey rounded-2xl">
                <div className="py-2 px-2 rounded-full bg-secondary-grey">
                  <LuRefreshCw className="text-2xl  text-white" />
                </div>
              </div>
              <p className="py-3">Training Belum Tersedia.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
