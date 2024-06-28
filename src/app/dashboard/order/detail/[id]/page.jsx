"use client";
import { useEffect } from "react";

export default function OrderDetail({ params }) {
  const test = () => {
    console.log(params);
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <>
      <div className="py-7">
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Rincian Order</p>
        <div className="mt-9 w-full bg-primary-white rounded-xl">
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:justify-between px-5 py-5">
            <div>
              <p className="text-xl font-bold">Invoice</p>
              <p>No: #INV2024022001</p>
              <p>Tanggal transaksi: 12 September 2024</p>
              <p>Tanggal pembayaran: 13 September 2024</p>
            </div>
            <div>
              <p className="text-xl font-bold">Nama Perusahaan</p>
              <p>info@uinsgd.ac.id - (022) 7800525</p>
              <p>Jalan A.H. Nasution No. 105, Cipadung, Cibiru</p>
              <p>Kota Bandung, Jawa Barat 40614</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full bg-primary-white rounded-xl">
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:justify-between px-5 py-5">
            <div>
              <p className="text-xl font-bold">Rincian Pelanggan</p>
              <p>Dian Saputra</p>
              <p>dayensptr@gmail.com</p>
              <p>(+62) 81 234 567 890</p>
            </div>
            <div>
              <p className="text-xl font-bold">Alamat Pembayaran</p>
              <p>Jalan Cimencrang, Panyileukan, Cimencrang,</p>
              <p>Gedebage, Kota Bandung, Jawa Barat 40292</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="container mx-auto p-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-primary-blue text-white">
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Nama Kelas</th>
                  <th className="border px-4 py-2">Jenis Kelas</th>
                  <th className="border px-4 py-2">Jumlah Pesanan</th>
                  <th className="border px-4 py-2">Total Pendapatan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800">
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-secondary-greydark">Menghadapi tantangan revolusi Industri 5.0</td>
                  <td className="border px-4 py-2 text-center text-secondary-greydark">Webinar</td>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-right">Rp50.000</td>
                </tr>
                <tr className="bg-white text-gray-800">
                  <td className="border px-4 py-2 text-center">2</td>
                  <td className="border px-4 py-2 text-secondary-greydark">Pengenalan Fundamental Python untuk Data Mining</td>
                  <td className="border px-4 py-2 text-center text-secondary-greydark">Workshop</td>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-right">Rp100.000</td>
                </tr>
                <tr className="bg-white text-gray-800">
                  <td className="border px-4 py-2 text-center">3</td>
                  <td className="border px-4 py-2 text-secondary-greydark">Implementasi OpenCV dalam keberlangsungan presensi Sekolah Dasar</td>
                  <td className="border px-4 py-2 text-center text-secondary-greydark">Training</td>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-right">Rp700.000</td>
                </tr>
                <tr className="bg-[#CAEDFE] text-gray-800">
                  <td className="border px-4 py-2 text-center font-bold" colSpan={3}>
                    Total
                  </td>
                  <td className="border px-4 py-2 text-center font-bold">3</td>
                  <td className="border px-4 py-2 text-right font-bold">Rp850.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
