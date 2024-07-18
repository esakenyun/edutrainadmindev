import { handleFetchRegisteredWorkshopUsers } from "@/helpers/workshopHelper";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// const USERS_PER_PAGE = 10;

function convertToWIB(dateString) {
  const date = new Date(dateString);
  const pad = (num) => num.toString().padStart(2, "0");

  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();

  let wibHours = utcHours + 7;
  let wibDay = date.getUTCDate();
  let wibMonth = date.getUTCMonth() + 1;
  let wibYear = date.getUTCFullYear();

  if (wibHours >= 24) {
    wibHours -= 24;
    wibDay += 1;

    const daysInMonth = new Date(wibYear, wibMonth, 0).getDate();
    if (wibDay > daysInMonth) {
      wibDay = 1;
      wibMonth += 1;

      if (wibMonth > 12) {
        wibMonth = 1;
        wibYear += 1;
      }
    }
  }

  const formattedDay = pad(wibDay);
  const formattedMonth = pad(wibMonth);
  const formattedHours = pad(wibHours);
  const formattedMinutes = pad(utcMinutes);

  return `${formattedDay}-${formattedMonth}-${wibYear} ${formattedHours}:${formattedMinutes} WIB`;
}

export default function RegisteredWorkshopTable({ id }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [registeredUser, setRegisteredUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(Number.MAX_SAFE_INTEGER);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRowsChange = (e) => {
    const value = e.target.value === "all" ? Number.MAX_SAFE_INTEGER : parseInt(e.target.value, 10);
    setUsersPerPage(value);
    setCurrentPage(0);
  };

  const fetchAllDataUserTraining = async () => {
    const response = await handleFetchRegisteredWorkshopUsers(id);
    console.log(response);
    setRegisteredUser(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllDataUserTraining();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading Table User...</div>;
  }

  if (!registeredUser || registeredUser.length === 0) {
    return <div className=" pt-20 text-secondary-grey">Tidak Ada Peserta Workshop</div>;
  }

  const offset = currentPage * usersPerPage;
  const filteredUsers = registeredUser.filter((user) => user.fullname.toLowerCase().includes(searchTerm.toLowerCase()));
  // const currentUsers = registeredUser.slice(offset, offset + USERS_PER_PAGE);
  const currentUsers = filteredUsers.slice(offset, offset + usersPerPage);

  return (
    <>
      <div className="py-5">
        <p className="text-secondary-dark font-bold text-xl py-2">Peserta Terdaftar :</p>
        <div className="py-3">
          <div className="bg-primary-white w-fit py-2 pl-1 pr-5">
            <p className="font-bold">Filter</p>
            <div className="flex items-center gap-2">
              <p className="text-sm">Urutkan Berdasarkan : </p>
              <select name="filterUser" id="filterUser" className="text-sm bg-secondary-lightmedium rounded-lg">
                <option value="nama">Nama</option>
                <option value="nama">Instansi</option>
              </select>
            </div>
            <div className="flex items-center justify-center pt-3">
              <button className="text-sm text-primary-white font-semibold rounded-md bg-primary-green px-4 py-1 hover:scale-105">Terapkan</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor="entires" className="mr-2">
              Show
            </label>
            <select id="entries" className="border rounded text-sm p-1" value={usersPerPage === Number.MAX_SAFE_INTEGER ? "all" : usersPerPage} onChange={handleRowsChange}>
              <option value="all">All</option>
              <option value={1}>1</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <label htmlFor="entries" className="ml-2">
              entries
            </label>
          </div>
          <div>
            <input type="text" placeholder="Cari Peserta Workshop..." className="border rounded-md p-2 outline-none focus:border-primary-blue placeholder:text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white border-collapse">
            <thead>
              <tr>
                <th className="border border-secondary-greydark p-2">No</th>
                <th className="border border-secondary-greydark p-2">Nama Lengkap</th>
                <th className="border border-secondary-greydark p-2">Instansi</th>
                <th className="border border-secondary-greydark p-2">Email</th>
                <th className="border border-secondary-greydark p-2">No Whatsapp</th>
                <th className="border border-secondary-greydark p-2">Tanggal Mendaftar</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No matching records found.
                  </td>
                </tr>
              ) : (
                currentUsers.map((user, index) => (
                  <tr key={index} className="odd:bg-secondary-lightmedium even:bg-primary-white">
                    <td className="border px-4 py-2 border-secondary-greydark">{offset + index + 1}</td>
                    <td className="border px-4 py-2 border-secondary-greydark">{user.fullname}</td>
                    <td className="border px-4 py-2 border-secondary-greydark">{user.organization}</td>
                    <td className="border px-4 py-2 border-secondary-greydark">{user.email}</td>
                    <td className="border px-4 py-2 border-secondary-greydark">{user.phone}</td>
                    <td className="border px-4 py-2 border-secondary-greydark">{convertToWIB(user.createdAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="py-5">
          {usersPerPage !== Number.MAX_SAFE_INTEGER && (
            <ReactPaginate
              previousLabel={""}
              nextLabel={""}
              breakLabel={"..."}
              pageCount={Math.ceil(filteredUsers.length / usersPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex justify-center mt-4 gap-5"
              pageClassName="py-1 rounded-full px-3 border-2 text-secondary-grey relative"
              activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-cool-blueactive text-white font-bold"
            />
          )}
        </div>
      </div>
    </>
  );
}
