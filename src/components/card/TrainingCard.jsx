import { useEffect, useState } from "react";
import { BiCalendarExclamation, BiSolidShoppingBags } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { handleFetchTrainingData } from "@/helpers/trainingHelper";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import TrainingCardSkeleton from "../skeleton/TrainingCardSkeleton";

const ITEMS_PER_PAGE = 6;

function formatTrainingDates(startTime, endTime) {
  if (!startTime || !endTime) {
    return "Tanggal tidak tersedia";
  }

  try {
    const startDate = parseISO(startTime);
    const endDate = parseISO(endTime);

    const startMonth = format(startDate, "MMMM");
    const endMonth = format(endDate, "MMMM");

    const startDay = format(startDate, "d");
    const endDay = format(endDate, "d");
    const year = format(startDate, "yyyy");

    if (startMonth === endMonth) {
      return `${startDay} - ${endDay} ${startMonth} ${year}`;
    } else {
      const startMonthShort = format(startDate, "MMM");
      const endMonthShort = format(endDate, "MMM");
      return `${startDay} ${startMonthShort} - ${endDay} ${endMonthShort} ${year}`;
    }
  } catch (error) {
    console.error("Error parsing dates:", error);
    return "Tanggal tidak valid";
  }
}

function calculateDiscountPercentage(price, discount) {
  return (discount / price) * 100;
}
// const trainingData = [
//   {
//     id: 1,
//     isNew: false,
//     isPopuler: true,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Online",
//     hasCertificate: true,
//   },
//   {
//     id: 2,
//     isNew: true,
//     isPopuler: false,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Offline",
//     hasCertificate: true,
//   },
//   {
//     id: 3,
//     isNew: true,
//     isPopuler: false,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Online",
//     hasCertificate: true,
//   },
//   {
//     id: 4,
//     isNew: false,
//     isPopuler: true,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Offline",
//     hasCertificate: true,
//   },
//   {
//     id: 5,
//     isNew: true,
//     isPopuler: false,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Online",
//     hasCertificate: true,
//   },
//   {
//     id: 6,
//     isNew: true,
//     isPopuler: false,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Offline",
//     hasCertificate: true,
//   },
//   {
//     id: 7,
//     isNew: true,
//     isPopuler: false,
//     imageSrc: "/training.png",
//     date: "24 - 27 Nov 2024",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Training X",
//     status: "Online",
//     hasCertificate: true,
//   },
// ];

export default function TrainingCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [trainingData, setTrainingData] = useState([]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const fetchAlTraining = async () => {
    const response = await handleFetchTrainingData();
    // console.log(response);
    const sortedTraning = response.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    setTimeout(() => {
      setTrainingData(sortedTraning);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchAlTraining();
  }, []);

  if (loading) {
    return <TrainingCardSkeleton />;

    // return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!trainingData || trainingData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data Training Found</div>;
  }
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = trainingData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = trainingData.length > ITEMS_PER_PAGE;

  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {currentPageData.map((training) => {
          const isPastEvent = new Date(training.endTime) < new Date();
          return (
            <div key={training.id} className="bg-primary-white rounded-xl shadow-2xl hover:scale-105 h-fit">
              {training.isNew && <div className="absolute bg-warm-redtomato py-2 px-3 text-xs text-primary-white font-medium rounded-tl-lg rounded-br-lg">Baru</div>}
              {training.isPopuler && <div className="absolute bg-warm-redtomato py-2 px-3 text-xs text-primary-white font-medium rounded-tl-lg rounded-br-lg">Populer</div>}
              {/* <Image src={training.banner} width={500} height={500} priority /> */}
              <Image src={training.banner.toString()} width={500} height={500} className={`w-full h-auto rounded-t-lg ${isPastEvent ? "grayscale" : ""}`} alt={training.title} priority />
              <div className="py-3 px-3">
                <div className="flex items-center gap-1">
                  <BiCalendarExclamation />
                  <div className="text-sm">{formatTrainingDates(training.startTime, training.endTime)}</div>
                </div>
                <div className="py-2">
                  <h1 className="text-lg font-bold">{training.title}</h1>
                  <div className="flex items-center justify-between">
                    <p className="text-xs line-through font-medium">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(training.lastTrainingHistory.price)}</p>
                    <div className="text-xs py-1.5 px-2 bg-warm-redtomato text-primary-white rounded-lg">Potongan Harga {training.lastTrainingHistory.discount}%</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    {training.lastTrainingHistory.discount === "100" ? (
                      <p className="font-bold text-lg">Free Training</p>
                    ) : (
                      <p className="font-bold">
                        {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(training.lastTrainingHistory.price - (training.lastTrainingHistory.price * training.lastTrainingHistory.discount) / 100)}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <BiSolidShoppingBags className="text-xl" />
                      <p className="text-xs font-medium">21{training.soldCount} terjual / dummy</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between font-medium">
                    <p className="text-sm">{training.status}</p>
                    {training.hasCertificate && <p className="text-sm">Sertifikat</p>}
                  </div>
                </div>
                <Link href={`/dashboard/training/detail/${training.id}`} className="py-2 px-2 w-full flex items-center justify-center font-bold rounded-md text-primary-white bg-primary-blue">
                  Lihat Rincian
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {shouldRenderPagination && (
        <div className="pt-16">
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            pageCount={Math.ceil(trainingData.length / ITEMS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center mt-4 gap-5"
            pageClassName="py-1 rounded-full px-3 border-2 text-secondary-grey relative"
            activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-cool-blueactive text-white font-bold"
          />
        </div>
      )}
    </div>
  );
}
