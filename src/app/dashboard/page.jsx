"use client";
import DashboardPageComponent from "@/components/pages/dashboard/DashboardPageComponent";

// const Kemarin = () => (
//   <div>
//     <div className="pt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiDollarSign className="text-xl" />
//             <p className="text-sm">Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.2.178.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-green-200 text-[12px] text-green-500 font-bold">+ 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">Kemarin</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiActivity className="text-xl" />
//             <p className="text-sm">Rata-Rata Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.896.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">Kemarin</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiShoppingBag className="text-xl" />
//             <p className="text-sm">Jumlah Pesanan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">100</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">Kemarin</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiUser className="text-xl" />
//             <p className="text-sm">Jumlah Pengguna</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">1400</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">Kemarin</div>
//         </div>
//       </div>
//     </div>
//     <div className="grid lg:grid-cols-4 gap-5">
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Pengguna Baru</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">Kemarin</p>
//         <BarChartPenggunaBaru />
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg py-4">
//         <p className="font-bold text-center">Instansi Langganan Teratas</p>
//         <div className="mt-2 flex flex-col gap-3 px-3">
//           <div className="flex gap-2 bg-warm-red items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-orange items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-yellow items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-blue items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-green items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:row-span-2 py-2 px-2">
//         <div className="flex justify-between items-center">
//           <p className="text-sm">Persebaran Pengguna</p>
//           <p className="text-[10px] text-[#4C49F1] border border-primary-blue rounded-full px-1 hover:cursor-pointer hover:scale-105">Lihat Semua</p>
//         </div>
//         <div className="mt-6 flex flex-col gap-5 px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojabar.png" width={30} height={35} className="w-auto" alt="logojabar" priority />
//               <p className="text-sm">Jawa Barat</p>
//             </div>
//             <p className="text-sm">43%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logodki.png" width={40} height={35} className="w-auto" alt="logodki" priority />
//               <p className="text-sm">DKI Jakarta</p>
//             </div>
//             <p className="text-sm">20%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojateng.png" width={40} height={35} className="w-auto" alt="logojateng" priority />
//               <p className="text-sm">Jawa Tengah</p>
//             </div>
//             <p className="text-sm">12%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojatim.png" width={40} height={35} className="w-auto" alt="logojatim" priority />
//               <p className="text-sm">Jawa Timur</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logobanten.png" width={40} height={35} className="w-auto" alt="logobanten" priority />
//               <p className="text-sm">Banten</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Jumlah Transaksi</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">Kemarin</p>
//         <BarChartTransaksi />
//       </div>
//       <div className="items-center rounded-md bg-primary-white py-5 px-5 shadow-lg h-fit">
//         <h1 className="text-sm font-bold text-[#515151]">Jadwal Pertemuan yang akan datang</h1>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#F25555] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">27 jan </span>
//           <span className="ml-2 text-sm"> Pembahasan Scrum</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#1DADFE] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">29 jan</span>
//           <span className="ml-2 text-sm">Rencana Tim</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#05D24B] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">31 jan </span>
//           <span className="ml-2 text-sm"> Perencanaan Desain Proyek</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const TujuhHari = () => (
//   <div>
//     <div className="pt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiDollarSign className="text-xl" />
//             <p className="text-sm">Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.2.178.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-green-200 text-[12px] text-green-500 font-bold">+ 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">7 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiActivity className="text-xl" />
//             <p className="text-sm">Rata-Rata Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.896.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">7 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiShoppingBag className="text-xl" />
//             <p className="text-sm">Jumlah Pesanan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">100</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">7 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiUser className="text-xl" />
//             <p className="text-sm">Jumlah Pengguna</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">1400</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">7 hari terakhir</div>
//         </div>
//       </div>
//     </div>
//     <div className="grid lg:grid-cols-4 gap-5">
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Pengguna Baru</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">7 Hari Terakhir</p>
//         <BarChartPenggunaBaru />
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg py-4">
//         <p className="font-bold text-center">Instansi Langganan Teratas</p>
//         <div className="mt-2 flex flex-col gap-3 px-3">
//           <div className="flex gap-2 bg-warm-red items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-orange items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-yellow items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-blue items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-green items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:row-span-2 py-2 px-2">
//         <div className="flex justify-between items-center">
//           <p className="text-sm">Persebaran Pengguna</p>
//           <p className="text-[10px] text-[#4C49F1] border border-primary-blue rounded-full px-1 hover:cursor-pointer hover:scale-105">Lihat Semua</p>
//         </div>
//         <div className="mt-6 flex flex-col gap-5 px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojabar.png" width={40} height={35} className="w-auto" alt="logojabar" priority />
//               <p className="text-sm">Jawa Barat</p>
//             </div>
//             <p className="text-sm">43%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logodki.png" width={40} height={35} className="w-auto" alt="logodki" priority />
//               <p className="text-sm">DKI Jakarta</p>
//             </div>
//             <p className="text-sm">20%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojateng.png" width={40} height={35} className="w-auto" alt="logojateng" priority />
//               <p className="text-sm">Jawa Tengah</p>
//             </div>
//             <p className="text-sm">12%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojatim.png" width={40} height={35} className="w-auto" alt="logojatim" priority />
//               <p className="text-sm">Jawa Timur</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logobanten.png" width={40} height={35} className="w-auto" alt="logobanten" priority />
//               <p className="text-sm">Banten</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Jumlah Transaksi</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">7 Hari Terakhir</p>
//         <BarChartTransaksi />
//       </div>
//       <div className="items-center rounded-md bg-primary-white py-5 px-5 shadow-lg h-fit">
//         <h1 className="text-sm font-bold text-[#515151]">Jadwal Pertemuan yang akan datang</h1>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#F25555] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">27 jan </span>
//           <span className="ml-2 text-sm"> Pembahasan Scrum</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#1DADFE] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">29 jan</span>
//           <span className="ml-2 text-sm">Rencana Tim</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#05D24B] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">31 jan </span>
//           <span className="ml-2 text-sm"> Perencanaan Desain Proyek</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const TigaPuluh = () => (
//   <div>
//     <div className="pt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiDollarSign className="text-xl" />
//             <p className="text-sm">Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.2.178.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-green-200 text-[12px] text-green-500 font-bold">+ 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">30 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiActivity className="text-xl" />
//             <p className="text-sm">Rata-Rata Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.896.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">30 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiShoppingBag className="text-xl" />
//             <p className="text-sm">Jumlah Pesanan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">100</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">30 hari terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiUser className="text-xl" />
//             <p className="text-sm">Jumlah Pengguna</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">1400</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">30 hari terakhir</div>
//         </div>
//       </div>
//     </div>
//     <div className="grid lg:grid-cols-4 gap-5">
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Pengguna Baru</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">30 Hari Terakhir</p>
//         <BarChartPenggunaBaru />
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg py-4">
//         <p className="font-bold text-center">Instansi Langganan Teratas</p>
//         <div className="mt-2 flex flex-col gap-3 px-3">
//           <div className="flex gap-2 bg-warm-red items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-orange items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-yellow items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-blue items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-green items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:row-span-2 py-2 px-2">
//         <div className="flex justify-between items-center">
//           <p className="text-sm">Persebaran Pengguna</p>
//           <p className="text-[10px] text-[#4C49F1] border border-primary-blue rounded-full px-1 hover:cursor-pointer hover:scale-105">Lihat Semua</p>
//         </div>
//         <div className="mt-6 flex flex-col gap-5 px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojabar.png" width={30} height={35} className="w-auto" alt="logojabar" priority />
//               <p className="text-sm">Jawa Barat</p>
//             </div>
//             <p className="text-sm">43%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logodki.png" width={40} height={35} className="w-auto" alt="logodki" priority />
//               <p className="text-sm">DKI Jakarta</p>
//             </div>
//             <p className="text-sm">20%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojateng.png" width={40} height={35} className="w-auto" alt="logojateng" priority />
//               <p className="text-sm">Jawa Tengah</p>
//             </div>
//             <p className="text-sm">12%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojatim.png" width={40} height={35} className="w-auto" alt="logojatim" priority />
//               <p className="text-sm">Jawa Timur</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logobanten.png" width={40} height={35} className="w-auto" alt="logobanten" priority />
//               <p className="text-sm">Banten</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Jumlah Transaksi</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">30 Hari Terakhir</p>
//         <BarChartTransaksi />
//       </div>
//       <div className="items-center rounded-md bg-primary-white py-5 px-5 shadow-lg h-fit">
//         <h1 className="text-sm font-bold text-[#515151]">Jadwal Pertemuan yang akan datang</h1>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#F25555] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">27 jan </span>
//           <span className="ml-2 text-sm"> Pembahasan Scrum</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#1DADFE] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">29 jan</span>
//           <span className="ml-2 text-sm">Rencana Tim</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#05D24B] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">31 jan </span>
//           <span className="ml-2 text-sm"> Perencanaan Desain Proyek</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const DuaBelasBulan = () => (
//   <div>
//     <div className="pt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiDollarSign className="text-xl" />
//             <p className="text-sm">Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.2.178.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-green-200 text-[12px] text-green-500 font-bold">+ 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">12 bulan terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiActivity className="text-xl" />
//             <p className="text-sm">Rata-Rata Pemasukan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">Rp.896.000</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">12 bulan terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiShoppingBag className="text-xl" />
//             <p className="text-sm">Jumlah Pesanan</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">100</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">12 bulan terakhir</div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white h-40 shadow-lg">
//         <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
//           <div className="flex items-center gap-2">
//             <FiUser className="text-xl" />
//             <p className="text-sm">Jumlah Pengguna</p>
//           </div>
//           <div>
//             <IoIosMore className="text-xl" />
//           </div>
//         </div>
//         <div className="py-4 pl-9 text-xl">1400</div>
//         <div className="flex items-center pl-9 gap-2 ">
//           <div className="px-5 rounded-xl bg-red-300 text-[12px] text-warm-red font-bold">- 23.5</div>
//           <div className="text-[10px] text-secondary-grey ">12 bulan terakhir</div>
//         </div>
//       </div>
//     </div>
//     <div className="grid lg:grid-cols-4 gap-5">
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Pengguna Baru</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">12 Bulan Terakhir</p>
//         <BarChartPenggunaBaru />
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg py-4">
//         <p className="font-bold text-center">Instansi Langganan Teratas</p>
//         <div className="mt-2 flex flex-col gap-3 px-3">
//           <div className="flex gap-2 bg-warm-red items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-orange items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-warm-yellow items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-blue items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//           <div className="flex gap-2 bg-primary-green items-center px-3 py-1 rounded-lg">
//             <Image src="/admin/logouin.png" width={40} height={10} className="w-auto" alt="logouin" priority />
//             <p className="text-xs font-bold text-white">UIN Sunan Gunung Djati Bandung</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:row-span-2 py-2 px-2">
//         <div className="flex justify-between items-center">
//           <p className="text-sm">Persebaran Pengguna</p>
//           <p className="text-[10px] text-[#4C49F1] border border-primary-blue rounded-full px-1 hover:cursor-pointer hover:scale-105">Lihat Semua</p>
//         </div>
//         <div className="mt-6 flex flex-col gap-5 px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojabar.png" width={30} height={35} className="w-auto" alt="logojabar" priority />
//               <p className="text-sm">Jawa Barat</p>
//             </div>
//             <p className="text-sm">43%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logodki.png" width={40} height={35} className="w-auto" alt="logodki" priority />
//               <p className="text-sm">DKI Jakarta</p>
//             </div>
//             <p className="text-sm">20%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojateng.png" width={40} height={35} className="w-auto" alt="logojateng" priority />
//               <p className="text-sm">Jawa Tengah</p>
//             </div>
//             <p className="text-sm">12%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logojatim.png" width={40} height={35} className="w-auto" alt="logojatim" priority />
//               <p className="text-sm">Jawa Timur</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex gap-5 items-center">
//               <Image src="/admin/logobanten.png" width={40} height={35} className="w-auto" alt="logobanten" priority />
//               <p className="text-sm">Banten</p>
//             </div>
//             <p className="text-sm">10%</p>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-primary-white shadow-lg md:col-span-2 px-5 py-2">
//         <div className="px-5 flex justify-between items-center">
//           <p className="lg:text-lg">Jumlah Transaksi</p>
//           <div className="flex items-center text-[#4C49F1] border border-primary-blue rounded-full px-2 hover:cursor-pointer hover:scale-105">
//             <p className="text-[10px]">Lihat Laporan</p>
//             <IoIosArrowDown className="text-xs" />
//           </div>
//         </div>
//         <p className="px-5 text-[10px] mt-2">12 Bulan Terakhir</p>
//         <BarChartTransaksi />
//       </div>
//       <div className="items-center rounded-md bg-primary-white py-5 px-5 shadow-lg h-fit">
//         <h1 className="text-sm font-bold text-[#515151]">Jadwal Pertemuan yang akan datang</h1>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#F25555] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">27 jan </span>
//           <span className="ml-2 text-sm"> Pembahasan Scrum</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#1DADFE] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">29 jan</span>
//           <span className="ml-2 text-sm">Rencana Tim</span>
//         </div>
//         <div className="mt-3 py-2 px-3 rounded-md bg-[#05D24B] text-primary-white">
//           <span className="text-xs text-[#F1F1F1]">31 jan </span>
//           <span className="ml-2 text-sm"> Perencanaan Desain Proyek</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default function Dashboard() {
//   // const [selectedTab, setSelectedTab] = useState("tujuhhariterakhir");
//   return (
//     <>
//       <div className="py-7">
//         <div className="flex items-center justify-between">
//           <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Dashboard</p>
//           <div>
//             <div className="lg:hidden items-center">
//               <label htmlFor="Tab" className="sr-only"></label>
//               <select id="Tab" className="w-full rounded-md border-gray-200 py-2" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
//                 <option value="kemarin">Kemarin</option>
//                 <option value="tujuhhariterakhir">7 hari terakhir</option>
//                 <option value="tigapuluhhariterakhir">30 hari terakhir</option>
//                 <option value="duabelasbulanterakhir">12 bulan terakhir</option>
//               </select>
//             </div>
//             <div className="hidden lg:block">
//               <nav className="-mb-px flex items-center gap-6" aria-label="Tabs">
//                 <div
//                   className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
//                     selectedTab === "kemarin" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   }`}
//                   onClick={() => setSelectedTab("kemarin")}>
//                   Kemarin
//                 </div>
//                 <div
//                   className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
//                     selectedTab === "tujuhhariterakhir" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   }`}
//                   onClick={() => setSelectedTab("tujuhhariterakhir")}>
//                   7 hari terakhir
//                 </div>
//                 <div
//                   className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
//                     selectedTab === "tigapuluhhariterakhir" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   }`}
//                   onClick={() => setSelectedTab("tigapuluhhariterakhir")}>
//                   30 Hari Terakhir
//                 </div>
//                 <div
//                   className={`inline-flex shrink-0 items-center cursor-pointer border-b-2 px-1 text-sm ${
//                     selectedTab === "duabelasbulanterakhir" ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   }`}
//                   onClick={() => setSelectedTab("duabelasbulanterakhir")}>
//                   12 Bulan Terakhir
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div>
//           {selectedTab === "kemarin" && <Kemarin />}
//           {selectedTab === "tujuhhariterakhir" && <TujuhHari />}
//           {selectedTab === "tigapuluhhariterakhir" && <TigaPuluh />}
//           {selectedTab === "duabelasbulanterakhir" && <DuaBelasBulan />}
//         </div>
//       </div>
//     </>
//   );
// }

export default function Dashboard() {
  return <DashboardPageComponent />;
}
