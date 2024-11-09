import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { handleFetchWorkshopData } from "@/helpers/workshopHelper";
import { BiSolidShoppingBags } from "react-icons/bi";
import Image from "next/image";
import WorkshopCardSkeleton from "../skeleton/WorkshopCardSkeleton";

const ITEMS_PER_PAGE = 6;

// const workshopData = [
//   {
//     id: 1,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Playback",
//     hasCertificate: true,
//   },
//   {
//     id: 2,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Live",
//     hasCertificate: true,
//   },
//   {
//     id: 3,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Playback",
//     hasCertificate: true,
//   },
//   {
//     id: 4,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Live",
//     hasCertificate: true,
//   },
//   {
//     id: 5,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Playback",
//     hasCertificate: true,
//   },
//   {
//     id: 6,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Live",
//     hasCertificate: true,
//   },
//   {
//     id: 7,
//     isNew: true,
//     imageSrc: "/workshop.png",
//     originalPrice: "Rp. 200.000",
//     discountedPrice: "Rp. 100.000",
//     discount: "Potongan Harga 50%",
//     soldCount: 255,
//     title: "Workshop X",
//     category: "Live",
//     hasCertificate: true,
//   },
// ];

export default function WorkshopCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [workshopData, setWorkshopData] = useState([]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const fetchAllWorkshop = async () => {
    const response = await handleFetchWorkshopData();
    // console.log(response);
    const sortedWorkshop = response.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    setTimeout(() => {
      setWorkshopData(sortedWorkshop);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchAllWorkshop();
  }, []);

  if (loading) {
    return <WorkshopCardSkeleton />;
  }

  if (!workshopData || workshopData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data Workshop Found</div>;
  }

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = workshopData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = workshopData.length > ITEMS_PER_PAGE;
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {currentPageData.map((workshop) => {
          const isPastEvent = new Date(workshop.endTime) < new Date();
          return (
            <div key={workshop.id} className="bg-primary-white rounded-xl shadow-2xl hover:scale-105">
              {workshop.isNew && <div className="absolute bg-warm-redtomato py-2 px-3 text-xs text-primary-white font-medium rounded-tl-lg rounded-br-lg">Baru</div>}
              <Image src={workshop.banner} quality={100} width={500} height={500} className={`w-full h-auto rounded-t-lg ${isPastEvent ? "grayscale" : ""}`} alt={workshop.title} priority />
              <div className="py-3 px-3 text-black">
                <div className="py-2">
                  <h1 className="text-lg font-bold">{workshop.title}</h1>
                  {/* <div className="flex items-center justify-between">
                  <p className="text-xs line-through font-medium">{workshop.originalPrice}</p>
                  <div className="text-xs py-1.5 px-2 bg-warm-redtomato text-primary-white rounded-lg">{workshop.discount}</div>
                </div> */}
                  <div className="mt-2 flex justify-between">
                    <p className="font-bold">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(workshop.lastWorkshopHistory.price)}</p>
                    <div className="flex items-center gap-2">
                      <BiSolidShoppingBags className="text-xl" />
                      <p className="text-xs">{workshop.soldCount} 51 terjual / Dummy</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between font-medium">
                    <p className="text-sm">{workshop.status}</p>
                    {workshop.certificate ? <p className="text-sm">Sertifikat</p> : <p className="text-sm">Tanpa Sertifikat</p>}
                  </div>
                </div>
                <Link href={`/dashboard/workshop/detail/${workshop.id}`} className="py-2 px-2 w-full flex items-center justify-center font-bold rounded-md text-primary-white bg-primary-blue">
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
            pageCount={Math.ceil(workshopData.length / ITEMS_PER_PAGE)}
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
