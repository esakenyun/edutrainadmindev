"use client";

import OrderTable from "@/components/table/OrderTable";

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
//     <OrderTable />
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
//     <OrderTable />
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
//     <OrderTable />
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
//     <OrderTable />
//   </div>
// );

// export default function Order() {
//   const [selectedTab, setSelectedTab] = useState("tujuhhariterakhir");
//   return (
//     <>
//       <div className="py-7">
//         <div className="flex items-center justify-between">
//           <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue">Order</div>
//           <div>
//             {/* <div className="lg:hidden items-center">
//               <label htmlFor="Tab" className="sr-only"></label>
//               <select id="Tab" className="w-full rounded-md border-gray-200 py-2" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
//                 <option value="kemarin">Kemarin</option>
//                 <option value="tujuhhariterakhir">7 hari terakhir</option>
//                 <option value="tigapuluhhariterakhir">30 hari terakhir</option>
//                 <option value="duabelasbulanterakhir">12 bulan terakhir</option>
//               </select>
//             </div> */}
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

export default function OrderPage() {
  return (
    <>
      <div className="py-7">
        <div className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Order</div>
        <div className="py-3">
          <OrderTable />
        </div>
      </div>
    </>
  );
}
