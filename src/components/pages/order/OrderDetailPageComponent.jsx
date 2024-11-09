import OrderVerificationModal from "@/components/modal/OrderVerificationModal";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-Us", options);
};

const getEventTypeName = (eventType) => {
  switch (eventType) {
    case "WEBINAR":
      return "Webinar";
    case "WORKSHOP":
      return "Workshop";
    case "TRAINING":
      return "Training";
    default:
      return eventType;
  }
};

const getEventPrice = (orderData) => {
  if (!orderData || !orderData.event) return "0";

  switch (orderData.eventType) {
    case "WEBINAR":
      return orderData.event.lastWebinarHistory?.price || "0";
    case "WORKSHOP":
      return orderData.event.lastWorkshopHistory?.price || "0";
    case "TRAINING":
      return orderData.event.lastTrainingHistory?.price || "0";
    default:
      return "0";
  }
};

export default function OrderDetailPageComponent({ props }) {
  const orderData = props.orderData;
  const orderId = props.orderId;

  const openModalVerify = props.openModalVerify;
  const isModalVerifyOpen = props.isModalVerifyOpen;
  const closeModalVerify = props.closeModalVerify;

  return (
    <div className="py-7">
      <p className="py-2 px-2 md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Rincian Order</p>
      <div className="my-3">
        {orderData.isVerified ? (
          <div className="flex items-center text-green-500 md:text-lg">
            <FaCheckCircle className="mr-2" /> Telah Terverifikasi
          </div>
        ) : (
          <div className="flex gap-4 md:gap-7 items-center md:text-lg">
            <div className="flex items-center text-orange-500">
              <FaClock className="mr-2" /> Menunggu Verifikasi
            </div>
            <div onClick={openModalVerify} className="py-0.5 px-3 bg-primary-green text-white rounded-md cursor-pointer hover:scale-105">
              Verifikasi
            </div>
            {!orderData ? <></> : <OrderVerificationModal isOpen={isModalVerifyOpen} onClose={closeModalVerify} orderData={orderData} />}
          </div>
        )}
      </div>
      <div className="w-full bg-primary-white rounded-xl">
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:justify-between px-5 py-5">
          <div>
            <p className="text-xl font-bold">Invoice</p>
            <p>No: {orderData.id}</p>
            <p>Tanggal transaksi: {formatDate(orderData.createdAt)}</p>
            {/* <p>Tanggal pembayaran: 13 September 2024</p> */}
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
            <p>{orderData.account.fullname}</p>
            <p>{orderData.account.email}</p>
            <p>{orderData.account.phone}</p>
          </div>
          <div>
            <p className="text-xl font-bold">Alamat Pembayaran</p>
            <p>Jalan Cimencrang, Panyileukan, Cimencrang,</p>
            <p>Gedebage, Kota Bandung, Jawa Barat 40292</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="container mx-auto p-4 overflow-x-auto">
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
                <td className="border px-4 py-2 text-secondary-greydark">{orderData.event.title}</td>
                <td className="border px-4 py-2 text-center text-secondary-greydark">{getEventTypeName(orderData.eventType)}</td>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 text-right">Rp {getEventPrice(orderData)}</td>
              </tr>
              <tr className="bg-[#CAEDFE] text-gray-800">
                <td className="border px-4 py-2 text-center font-bold" colSpan={3}>
                  Total
                </td>
                <td className="border px-4 py-2 text-center font-bold">1</td>
                <td className="border px-4 py-2 text-right font-bold">Rp {getEventPrice(orderData)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
