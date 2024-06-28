import { useEffect, useState } from "react";
import { BiCalendarExclamation } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { handleFetchWebinarData } from "@/helpers/webinarHelper";
import Image from "next/image";
import WebinarCardSkeleton from "../skeleton/WebinarCardSkeleton";

const ITEMS_PER_PAGE = 6;

export default function WebinarCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [webinarData, setWebinarData] = useState([]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const fetchAllWebinar = async () => {
    const response = await handleFetchWebinarData();
    setTimeout(() => {
      setWebinarData(response);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchAllWebinar();
  }, []);

  if (loading) {
    return <WebinarCardSkeleton />;
    // return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!webinarData || webinarData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data Webinar Found</div>;
  }

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = webinarData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = webinarData.length > ITEMS_PER_PAGE;

  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {currentPageData.map((webinar) => {
          const isPastEvent = new Date(webinar.endTime) < new Date();
          return (
            <div key={webinar.id} className="bg-primary-white rounded-xl shadow-2xl hover:scale-105">
              {webinar.isNew && <div className="absolute bg-warm-redtomato py-2 px-3 text-xs text-primary-white font-medium rounded-tl-lg rounded-br-lg">New</div>}
              <Image src={webinar.banner} quality={100} width={500} height={500} className={`w-full h-auto rounded-t-lg ${isPastEvent ? "grayscale" : ""}`} alt={webinar.title} priority />
              <div className="py-3 px-3 text-secondary-dark">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <BiCalendarExclamation />
                    <p className="text-sm">{new Date(webinar.startTime).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuAlarmClock />
                    <p className="text-sm">{new Date(webinar.startTime).toLocaleTimeString()}</p>
                  </div>
                </div>
                <div className="py-2 flex flex-col gap-1">
                  <h1 className="text-xl font-bold">{webinar.title}</h1>
                  <p>{webinar.description}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{webinar.eventStatus}</p>
                  {webinar.certificate ? <p className="text-sm">Sertifikat</p> : <p className="text-sm">Tanpa Sertifikat</p>}
                </div>
                <Link href={`/dashboard/webinar/detail/${webinar.id}`} className="mt-2 py-2 px-2 w-full flex items-center justify-center font-bold rounded-md text-secondary-light bg-primary-blue">
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
            pageCount={Math.ceil(webinarData.length / ITEMS_PER_PAGE)}
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
