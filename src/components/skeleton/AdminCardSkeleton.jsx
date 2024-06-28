export default function AdminCardSkeleton() {
  const skeletonData = 3;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {[...Array(skeletonData)].map((_, index) => (
        <div key={index} className="relative">
          <div className="flex flex-col items-center gap-4 rounded-xl bg-primary-white shadow-lg py-5">
            <div className="flex items-center relative">
              {/* Avatar Skeleton */}
              <div className="w-28 h-28 bg-secondary-greydark rounded-full animate-pulse"></div>
              {/* Placeholder for more icon */}
              <div className="absolute mb-16 ml-32 w-3 h-8 rounded-full bg-secondary-greydark animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              {/* Name Skeleton */}
              <div className="w-20 h-5 bg-secondary-greydark rounded-full animate-pulse"></div>
              {/* Username Skeleton */}
              <div className="w-16 h-4 bg-secondary-greydark rounded-full mt-1 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-secondary-grey w-9 h-9 animate-pulse">{/* Phone Icon Skeleton */}</div>
              {/* Phone Number Skeleton */}
              <div className="font-semibold w-32 h-4 bg-secondary-greydark rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-secondary-grey w-9 h-9 animate-pulse">{/* Email Icon Skeleton */}</div>
              {/* Email Address Skeleton */}
              <div className="font-semibold w-32 h-4 bg-secondary-greydark rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
