import { FiSearch } from "react-icons/fi";

export default function Searchbar({ placeholder }) {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400 border border-gray-500 rounded-md w-28 md:w-fit ">
      <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <FiSearch />
        </button>
      </span>
      <input type="text" name="querysearch" className="py-2.5 text-xs md:text-sm text-white px-2 rounded-md pl-2 w-[110px] md:w-fit focus:outline-none focus:bg-white  focus:text-gray-900" placeholder={placeholder} autoComplete="off" />
    </div>
  );
}
