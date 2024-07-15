import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IoIosMore } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-Us", options);
};

const columns = [
  {
    field: "Tanggal",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Tanggal Transaksi</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.createdAt ? formatDate(params.row.createdAt) : "N/A"}</div>,
  },
  {
    field: "Invoice",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Nomor Invoice</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.value}</div>,
  },
  {
    field: "Email",
    width: 250,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Email Pengguna</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.accoundId ?? "N/A"}</div>,
  },
  {
    field: "JumlahPesanan",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Jumlah Pesanan</div>,
    renderCell: (params) => <div className="text-[#343A40] pl-8">{params.value}</div>,
  },
  {
    field: "TotalPendapatan",
    width: 220,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Total Pendapatan</div>,
    renderCell: (params) => <div className="text-[#343A40] pl-2">{params.value}</div>,
  },
  {
    field: "Aksi",
    width: 95,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Aksi</div>,
    renderCell: () => (
      <div className="pl-2 pt-5 text-[#6C757D] cursor-pointer">
        <IoIosMore />
      </div>
    ),
  },
];

const allRows = [
  {
    id: 1,
    Tanggal: "1 Agustus 2024",
    Invoice: "INV2024022001",
    Email: "dayensptr@gmail.com",
    JumlahPesanan: 200,
    TotalPendapatan: "Rp.1.200.000",
  },
  {
    id: 2,
    Tanggal: "2 Agustus 2024",
    Invoice: "INV2024022002",
    Email: "johndoe@gmail.com",
    JumlahPesanan: 150,
    TotalPendapatan: "Rp.1.050.000",
  },
  {
    id: 3,
    Tanggal: "2 Agustus 2024",
    Invoice: "INV2024022004",
    Email: "eliaiboy@gmail.com",
    JumlahPesanan: 7,
    TotalPendapatan: "Rp.70.000",
  },
  {
    id: 4,
    Tanggal: "4 Agustus 2024",
    Invoice: "INV2024022006",
    Email: "msyahrul11@gmail.com",
    JumlahPesanan: 10,
    TotalPendapatan: "Rp.1.200.000",
  },
  {
    id: 5,
    Tanggal: "5 Agustus 2024",
    Invoice: "INV20240220016",
    Email: "sii12prian@gmail.com",
    JumlahPesanan: 90,
    TotalPendapatan: "Rp.12.250.000",
  },
  {
    id: 6,
    Tanggal: "6 Agustus 2024",
    Invoice: "INV20240220018",
    Email: "Alexiozp@gmail.com",
    JumlahPesanan: 80,
    TotalPendapatan: "Rp.800.000",
  },
  {
    id: 7,
    Tanggal: "6 Agustus 2024",
    Invoice: "INV20240220022",
    Email: "fakk@gmail.com",
    JumlahPesanan: 180,
    TotalPendapatan: "Rp.1.500.000",
  },
  {
    id: 8,
    Tanggal: "6 Agustus 2024",
    Invoice: "INV20240220022",
    Email: "torii@gmail.com",
    JumlahPesanan: 180,
    TotalPendapatan: "Rp.1.500.000",
  },
  {
    id: 9,
    Tanggal: "6 Agustus 2024",
    Invoice: "INV20240220022",
    Email: "dasdas@gmail.com",
    JumlahPesanan: 180,
    TotalPendapatan: "Rp.1.500.000",
  },
  {
    id: 10,
    Tanggal: "6 Agustus 2024",
    Invoice: "INV20240220022",
    Email: "ibnu@gmail.com",
    JumlahPesanan: 180,
    TotalPendapatan: "Rp.1.500.000",
  },
];

const itemsPerPage = 7;

export default function OrderTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOrdersData, setIsOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleRowDoubleClick = (params) => {
    const orderId = params.row.id;
    console.log(orderId);
    router.push(`/dashboard/order/detail/${orderId}`);
  };

  const handleFetchOrdersData = async () => {
    // const response = await handleFetchOrderData();
    // setIsOrdersData(response);
    setIsOrdersData(allRows);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchOrdersData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!isOrdersData || isOrdersData.length === 0) {
    return <div className="flex justify-center items-center pt-20">No Data Order Found</div>;
  }

  const offset = currentPage * itemsPerPage;
  const currentRows = isOrdersData.slice(offset, offset + itemsPerPage);

  return (
    <Box className="lg:w-100%">
      <DataGrid
        rows={currentRows}
        columns={columns}
        pageSize={itemsPerPage}
        hideFooterPagination
        hideFooter
        onRowDoubleClick={handleRowDoubleClick}
        sx={{
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
      />
      <div className="pt-10">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(isOrdersData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center mt-4 gap-5"
          pageClassName="py-1 rounded-full px-3 text-secondary-grey border-2 relative"
          activeClassName="py-1 rounded-full px-3 bg-primary-blue border-2 border-secondary-activeblue text-white font-bold"
        />
      </div>
    </Box>
  );
}
