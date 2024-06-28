"use client";
import { handleFetchDetailUserData } from "@/helpers/userAccountHelper";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaRegBuilding } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import UserTransactionHistoryTable from "@/components/table/UserTransactionHistoryTable";
import PieChartUser from "@/components/chart/PieChartUser";

export default function UserDetail({ params }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const response = await handleFetchDetailUserData(params.id);
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  return (
    <>
      <div className="py-7">
        <div className="flex items-center gap-2 justify-between">
          <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Rincian User</div>
        </div>
        <div className="flex flex-col lg:flex-row py-5 gap-5">
          <div className="py-3 flex flex-col items-center gap-4 rounded-xl lg:w-4/12 bg-primary-white shadow-2xl">
            <div className="flex items-center">
              <Image src="/avatar.png" width={70} height={70} className="rounded-3xl w-auto h-auto" alt="User Detail Avatar" priority />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold">{userData?.fullname}</h1>
              {/* <p className="text-sm text-secondary-grey"></p> */}
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl py-3 px-3 bg-secondary-light">
                <FaRegBuilding className="text-primary-blue" />
              </div>
              <p className="text-sm font-semibold w-32 ">{userData.organization || "No Organization"}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl py-3 px-3 bg-secondary-light">
                <FaPhoneAlt className="text-primary-blue" />
              </div>
              <p className="text-sm font-semibold w-32 ">{userData?.phone || "No Found"}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl py-3 px-3 bg-secondary-light">
                <FaEnvelope className="text-primary-blue" />
              </div>
              <p className="text-sm font-semibold w-32 break-all">{userData?.email}</p>
            </div>
          </div>
          <div className="py-3 w-full rounded-xl bg-primary-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-center font-bold">Statistik Transaksi</p>
                <div className="flex justify-center mt-20">
                  <PieChartUser />
                </div>
              </div>
              <div>
                <p className="font-bold text-center">Kategori Materi Favorit</p>
                <div className="flex flex-col gap-3 mt-5 items-center">
                  <div className="flex gap-2 items-start">
                    <div className="rounded-full bg-black"></div>
                    <p className="text-sm">Pengembangan Web:</p>
                    <p className="text-sm">21</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="rounded-full bg-black"></div>
                    <p className="text-sm">Data Science:</p>
                    <p className="text-sm">21</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="rounded-full bg-black"></div>
                    <p className="text-sm">Pengembangan Web:</p>
                    <p className="text-sm">21</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-white py-3 rounded-xl shadow-lg">
          <div className="py-3 px-3">
            <p className="font-bold mb-3">Riwayat Transaksi</p>
            <UserTransactionHistoryTable />
          </div>
        </div>
      </div>
    </>
  );
}
