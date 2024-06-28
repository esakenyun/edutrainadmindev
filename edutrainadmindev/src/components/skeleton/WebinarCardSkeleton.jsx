export default function WebinarCardSkeleton() {
  const skeletonData = 3;

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      {[...Array(skeletonData)].map((_, index) => (
        <div key={index} className="bg-primary-white rounded-xl shadow-2xl h-fit relative overflow-hidden">
          <div className="animate-pulse">
            <div className="bg-secondary-greydark w-full h-44"></div>
          </div>

          <div className="py-3 px-3">
            <div className="flex justify-between">
              <div className="w-20 h-5 bg-secondary-greydark rounded-full animate-pulse"></div>
              <div className="w-20 h-5 bg-secondary-greydark rounded-full animate-pulse"></div>
            </div>

            <div className="py-2 animate-pulse">
              <div className="w-1/2 h-5 bg-secondary-greydark rounded-full"></div>
            </div>

            <div className="w-1/3 h-4 bg-secondary-greydark rounded-full animate-pulse"></div>

            <div className="mt-2 flex justify-between animate-pulse">
              <div className="w-1/4 h-4 bg-secondary-greydark rounded-full"></div>
              <div className="w-1/4 h-4 bg-secondary-greydark rounded-full"></div>
            </div>

            <div className="mt-2 animate-pulse">
              <div className="bg-primary-blue text-primary-white py-5 px-2 w-full rounded-md text-center"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
