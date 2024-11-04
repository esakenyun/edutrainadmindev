export default function DashboardSkeleton() {
  return (
    <div className="py-7">
      <div>
        <p className="py-2 px-2 text-xs md:text-2xl font-extrabold border-b-2 border-primary-blue text-primary-blue w-fit">Dashboard</p>
      </div>
      <div className="pt-6 mb-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 md:gap-10 lg:gap-28">
          {/* Skeleton untuk Total Event */}
          <div className="rounded-md bg-gray-200 h-60 animate-pulse shadow-lg">
            <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
              </div>
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
            </div>
            <div className="pt-10 pb-5 pl-14 h-10 bg-gray-300 rounded"></div>
            <div className="flex items-center pl-14 gap-2">
              <div className="px-7 py-0.5 rounded-lg bg-green-100 h-6 w-20"></div>
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Skeleton untuk Total User Terdaftar */}
          <div className="rounded-md bg-gray-200 h-60 animate-pulse shadow-lg">
            <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-48 bg-gray-300 rounded"></div>
              </div>
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
            </div>
            <div className="pt-10 pb-5 pl-14 h-10 bg-gray-300 rounded"></div>
            <div className="flex items-center pl-14 gap-2">
              <div className="px-7 py-0.5 rounded-lg bg-green-100 h-6 w-20"></div>
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="pt-9 md:pt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-10 lg:gap-20">
            {/* Skeleton untuk Total Webinar */}
            <div className="rounded-md bg-gray-200 h-48 animate-pulse shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-gray-300 rounded"></div>
                  <div className="h-8 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-6 bg-gray-300 rounded"></div>
              </div>
              <div className="py-5 pl-9 h-8 bg-gray-300 rounded"></div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 h-6 w-20"></div>
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Skeleton untuk Total Workshop */}
            <div className="rounded-md bg-gray-200 h-48 animate-pulse shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-gray-300 rounded"></div>
                  <div className="h-8 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-6 bg-gray-300 rounded"></div>
              </div>
              <div className="py-5 pl-9 h-8 bg-gray-300 rounded"></div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 h-6 w-20"></div>
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Skeleton untuk Total Training */}
            <div className="rounded-md bg-gray-200 h-48 animate-pulse shadow-lg">
              <div className="flex py-3 px-5 items-center pb-3 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-gray-300 rounded"></div>
                  <div className="h-8 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-6 bg-gray-300 rounded"></div>
              </div>
              <div className="py-5 pl-9 h-8 bg-gray-300 rounded"></div>
              <div className="flex items-center pl-9 gap-2">
                <div className="px-7 py-0.5 rounded-lg bg-green-100 h-6 w-20"></div>
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
