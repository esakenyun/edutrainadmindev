import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import { handleDeleteOrder, handleFetchOrderData } from "@/helpers/orderHelper";
import { FaCheckCircle, FaClock, FaEye, FaTrashAlt } from "react-icons/fa";
import { Menu, MenuItem, IconButton } from "@mui/material";
import DeleteModal from "../modal/DeleteModal";
import SuccessModal from "../modal/SuccessModal";
import { toast } from "sonner";

// Format the date to a readable format
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const ITEMS_PER_PAGE = 8;

const DropdownMenu = ({ row, onView, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClickMenu}>
        <IoIosMore />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem
          onClick={() => {
            onView(row);
            handleCloseMenu();
          }}>
          <FaEye className="mr-2 text-blue-500" />
          Detail
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDelete(row);
            handleCloseMenu();
          }}>
          <FaTrashAlt className="mr-2 text-red-500" />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default function OrderTable() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [isOrdersData, setIsOrdersData] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // const handleRowDoubleClick = (row) => {
  //   if (row.id !== "no-record") {
  //     router.push(`/dashboard/order/detail/${row.id}`);
  //   }
  // };

  const handleViewOrder = (row) => {
    router.push(`/dashboard/order/detail/${row.id}`);
  };

  const handleDeleteOrderById = (row) => {
    setSelectedRow(row);
    setOpenModalDelete(true);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteOrder(selectedRow.id);
    setOpenModalSuccess(true);
    if (response.status === 200) {
      setOpenModalDelete(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else if (response.error) {
      setOpenModalDelete(false);
      toast.error(response.message);
    }
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleCloseModalSuccess = () => {
    setOpenModalSuccess(false);
  };

  useEffect(() => {
    const handleFetchOrdersData = async () => {
      const response = await handleFetchOrderData();
      if (response && response.data) {
        const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setIsOrdersData(sortedData);
      }
      setLoading(false);
    };

    handleFetchOrdersData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!isOrdersData || isOrdersData.length === 0) {
    return <div className="flex justify-center items-center pt-20">No Data Order Found</div>;
  }

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentRows = isOrdersData.slice(offset, offset + ITEMS_PER_PAGE);

  const shouldRenderPagination = isOrdersData.length > ITEMS_PER_PAGE;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 border-secondary-greydark">No</th>
            <th className="border px-4 py-2 border-secondary-greydark">Tanggal Transaksi</th>
            <th className="border px-4 py-2 border-secondary-greydark">Nomor Invoice</th>
            <th className="border px-4 py-2 border-secondary-greydark">Id Pengguna</th>
            <th className="border px-4 py-2 border-secondary-greydark">Jenis Order</th>
            <th className="border px-4 py-2 border-secondary-greydark">Verified</th>
            <th className="border px-4 py-2 border-secondary-greydark">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.length === 1 && currentRows[0].id === "no-record" ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No matching records found.
              </td>
            </tr>
          ) : (
            currentRows.map((row, index) => (
              <tr key={index} className="odd:bg-secondary-lightmedium even:bg-primary-white">
                <td className="border px-4 py-2 border-secondary-greydark">{currentPage * ITEMS_PER_PAGE + index + 1}</td>
                <td className="border px-4 py-2 border-secondary-greydark">{formatDate(row.createdAt)}</td>
                <td className="border px-4 py-2 border-secondary-greydark text-center">{row.id?.slice(0, 13) ?? "N/A"}</td>
                <td className="border px-4 py-2 border-secondary-greydark text-center">{row.accountId?.slice(0, 13) ?? "N/A"}</td>
                <td className="border px-4 py-2 border-secondary-greydark text-center">{row.eventType}</td>
                <td className="border px-4 py-2 border-secondary-greydark">
                  {row.isVerified ? (
                    <div className="flex items-center justify-center text-green-500">
                      <FaCheckCircle className="mr-2" /> Verified
                    </div>
                  ) : (
                    <div className="flex items-center justify-center text-orange-500">
                      <FaClock className="mr-2" /> Waiting
                    </div>
                  )}
                </td>
                <td className="border px-4 py-2 border-secondary-greydark">
                  <div className="flex justify-center items-center">
                    <DropdownMenu row={row} onView={handleViewOrder} onDelete={handleDeleteOrderById} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {shouldRenderPagination && (
        <div className="pt-5">
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(isOrdersData.length / ITEMS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex justify-center gap-5"
            pageClassName="py-1 rounded-full px-3 text-secondary-grey border-2 relative"
            activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-secondary-activeblue text-white font-bold"
          />
        </div>
      )}

      <DeleteModal open={openModalDelete} onClose={handleCloseModalDelete} onConfirm={handleDeleteConfirm} title="Apa anda yakin ingin menghapus order ini?" description="Data-data terkait order tersebut akan terhapus secara permanen." />
      <SuccessModal open={openModalSuccess} onClose={handleCloseModalSuccess} title="Order Berhasil dihapus!" description="Anda bisa melihat order lainnya di halaman order" />
    </div>
  );
}
