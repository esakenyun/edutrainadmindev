import { handleFetchStatistics } from "@/helpers/statisticHelper";
import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaSignal } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import DashboardSkeleton from "../../skeleton/DashboardSkeleton";
import { toast } from "sonner";

export default function DashboardPageComponent() {
  const [statisticData, setStatisticData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAllStatistic = async () => {
    const response = await handleFetchStatistics();
    setTimeout(() => {
      if (response.status === 200) {
        setStatisticData(response.data.data);
        setLoading(false);
      } else if (response.error) {
        toast.error(response.message);
        setStatisticData(response.data);
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchAllStatistic();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="py-7">
      <div>
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Dashboard</p>
      </div>
      <div className="pt-6 mb-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 md:gap-10 lg:gap-28">
          <div className="rounded-md bg-primary-white h-60 shadow-lg">
            <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
              <div className="flex items-center gap-2">
                <p className="text-3xl">Total Event</p>
              </div>
              <div>
                <IoIosMore className="text-xl" />
              </div>
            </div>
            <div className="pt-10 pb-5 pl-14 text-4xl font-semibold">{statisticData.totalEvent ?? 0}</div>
            <div className="flex items-center pl-14 gap-2">
              <div className="px-7 py-0.5 rounded-lg bg-green-100 text-sm text-green-500 font-bold">+ 23.5</div>
              <div className="text-sm text-secondary-grey ">7 hari terakhir</div>
            </div>
          </div>
          <div className="rounded-md bg-primary-white h-60 shadow-lg">
            <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
              <div className="flex items-center gap-2">
                <p className="text-3xl">Total User Terdaftar</p>
              </div>
              <div>
                <IoIosMore className="text-xl" />
              </div>
            </div>
            <div className="pt-10 pb-5 pl-14 text-4xl font-semibold">{statisticData.userCount ?? 0}</div>
            <div className="flex items-center pl-14 gap-2 ">
              <div className="px-7 py-0.5 rounded-lg bg-green-100 text-sm text-green-500 font-bold">+ 23.5</div>
              <div className="text-sm text-secondary-grey ">7 hari terakhir</div>
            </div>
          </div>
        </div>
        <div className="pt-9 md:pt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-10 lg:gap-20">
            <div className="rounded-md bg-primary-white h-48 shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-xl" />
                  <p className="text-xl">Total Webinar</p>
                </div>
                <div>
                  <IoIosMore className="text-xl" />
                </div>
              </div>
              <div className="py-5 pl-9 text-3xl">{statisticData.webinarCount ?? 0}</div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 text-sm text-green-500 font-bold">+ 23.5</div>
                <div className="text-sm text-secondary-grey ">7 hari terakhir</div>
              </div>
            </div>
            <div className="rounded-md bg-primary-white h-48 shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <FaChalkboardTeacher className="text-xl" />
                  <p className="text-xl">Total Workshop</p>
                </div>
                <div>
                  <IoIosMore className="text-xl" />
                </div>
              </div>
              <div className="py-5 pl-9 text-3xl">{statisticData.workshopCount ?? 0}</div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 text-sm text-green-500 font-bold">+ 23.5</div>
                <div className="text-sm text-secondary-grey ">7 hari terakhir</div>
              </div>
            </div>
            <div className="rounded-md bg-primary-white h-48 shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <FaSignal className="text-xl" />
                  <p className="text-xl">Total Training</p>
                </div>
                <div>
                  <IoIosMore className="text-xl" />
                </div>
              </div>
              <div className="py-5 pl-9 text-3xl">{statisticData.trainingCount ?? 0}</div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 text-sm text-green-500 font-bold">+ 23.5</div>
                <div className="text-sm text-secondary-grey ">7 hari terakhir</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
