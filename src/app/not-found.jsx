import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-7xl md:text-9xl">404</p>
        <p className="text-3xl md:text-5xl">This Page Not Found</p>
        <p className="mt-3 text-sm text-center md:text-lg font-extrabold">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link href="/dashboard" className="mt-5">
          <button className="py-3 px-5 bg-secondary-activeblue text-lg md:text-2xl text-primary-white rounded-2xl hover:scale-105">Back To Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
