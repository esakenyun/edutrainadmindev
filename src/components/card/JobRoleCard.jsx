import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 15;

const dummyData = [
  {
    id: 1,
    role: "Cyber Security Manager",
  },
  {
    id: 2,
    role: "Cyber Security Manager",
  },
  {
    id: 3,
    role: "Cyber Security Manager",
  },
  {
    id: 4,
    role: "Cyber Security Manager",
  },
  {
    id: 5,
    role: "Cyber Security Manager",
  },
  {
    id: 6,
    role: "Data Engineer",
  },
  {
    id: 7,
    role: "Data Engineer",
  },
  {
    id: 8,
    role: "Data Engineer",
  },
  {
    id: 9,
    role: "Data Engineer",
  },
  {
    id: 10,
    role: "Data Engineer",
  },
  {
    id: 11,
    role: "Data Engineer",
  },
  {
    id: 12,
    role: "Data Engineer",
  },
  {
    id: 13,
    role: "Data Engineer",
  },
  {
    id: 14,
    role: "Data Engineer",
  },
  {
    id: 15,
    role: "Data Engineer",
  },
  {
    id: 16,
    role: "Data Analyst",
  },
  {
    id: 17,
    role: "Data Analyst",
  },
  {
    id: 18,
    role: "Data Analyst",
  },
  {
    id: 19,
    role: "Data Analyst",
  },
  {
    id: 20,
    role: "Data Analyst",
  },
];

export default function JobRoleCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleOnClick = (id) => {
    const jobRoleId = id;
    // console.log(jobRoleId);
    router.push(`/dashboard/jobrole/detail/${jobRoleId}`);
  };

  const currentPageData = dummyData.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const shouldRenderPagination = dummyData.length > ITEMS_PER_PAGE;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {currentPageData.map((job) => (
          <div key={job.id} className="bg-primary-white rounded-md hover:cursor-pointer" onClick={() => handleOnClick(job.id)}>
            <div className="flex flex-col gap-2 py-4 px-5 justify-center items-center">
              <IoPersonCircleOutline className="text-7xl text-primary-blue font-extralight" />
              <p className="text-xl text-primary-blue text-center">{job.role}</p>
            </div>
          </div>
        ))}
      </div>
      {shouldRenderPagination && (
        <div className="pt-10">
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            pageCount={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center mt-4 gap-5"
            pageClassName="py-1 rounded-full px-3 border-2 text-secondary-grey relative"
            activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-cool-blueactive text-white font-bold"
          />
        </div>
      )}
    </>
  );
}
