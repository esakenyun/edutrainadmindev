import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import DeleteModal from "../modal/DeleteModal";
import SuccessModal from "../modal/SuccessModal";
import { toast } from "sonner";
import { handleDeleteUserAccount, handleFecthUserAccountData } from "@/helpers/userAccountHelper";
import LoadingAnimation from "../loading/LoadingAnimation";

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
    field: "foto",
    headerName: "",
    width: 50,
    editable: false,
    renderCell: (params) => (
      <div className="mt-2">
        <Image src="/avatar.png" width={30} height={30} className=" w-auto h-auto rounded-full" alt="profileImg" />
      </div>
    ),
  },
  {
    field: "Nama",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Nama </div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.fullname ?? "N/A"}</div>,
  },
  {
    field: "Tanggal",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Tanggal Bergabung</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.createdAt ? formatDate(params.row.createdAt) : "N/A"}</div>,
  },
  {
    field: "InstansiPekerjaan",
    width: 350,
    renderHeader: () => <div className="text-[#343A40]">Instansi - Pekerjaan</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.organization}</div>,
  },
  {
    field: "NomorHP",
    width: 200,
    renderHeader: () => <div className="text-[#343A40]">Nomor HP</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.row.phone}</div>,
  },
  {
    field: "Aksi",
    width: 120,
    renderHeader: () => <div className="text-[#343A40]">Aksi</div>,
    renderCell: (params) => <DropdownMenu params={params} />,
  },
];

const DropdownMenu = ({ params }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onHandleClickHapus = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteUserAccount(params.id);
    setOpenModalSuccess(true);
    if (response.status === 200) {
      setOpenModalDelete(false);
      window.location.reload();
    }
    if (response === false) {
      toast.error("User Account Not Deleted");
    }
  };

  const handleCloseModalSuccess = () => {
    setOpenModalSuccess(false);
    router.refresh();
  };
  return (
    <>
      <button onClick={handleDropdown} className="pl-2 pt-5 text-[#6C757D] cursor-pointer">
        <IoIosMore />
      </button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={onHandleClickHapus}>Hapus</MenuItem>
      </Menu>
      <DeleteModal open={openModalDelete} onClose={handleCloseModalDelete} onConfirm={handleDeleteConfirm} title="Apa anda yakin ingin menghapus akun user ini?" description="Data-data terkait akun tersebut akan terhapus secara permanen." />
      <SuccessModal open={openModalSuccess} onClose={handleCloseModalSuccess} title="Akun User Berhasil dihapus!" description="Anda bisa membuat akun user baru di halaman akun user" />
    </>
  );
};

const NoRecordRow = () => (
  <div className="MuiDataGrid-row Mui-odd MuiDataGrid-row--footer">
    <div className="MuiDataGrid-cell MuiDataGrid-cell--footer" colSpan={6}>
      No Record Found
    </div>
  </div>
);

export default function UserTable({ searchName }) {
  const [isUserData, setIsUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleFetchUserData = async () => {
    try {
      const response = await handleFecthUserAccountData();
      setTimeout(() => {
        setIsUserData(response);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const handleRowDoubleClick = (params) => {
    const userId = params.row.id;
    router.push(`/dashboard/account/user/detail/${userId}`);
  };

  useEffect(() => {
    handleFetchUserData();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
    // return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  const filteredUsers = isUserData.filter((user) => user.fullname.toLowerCase().includes(searchName.toLowerCase()));

  // Tambahkan NoRecordRow jika tidak ada data yang sesuai dengan pencarian
  const rows = filteredUsers.length > 0 ? filteredUsers : [{ id: "no-record", fullname: "No Record Found", organization: "No Record Found" }];

  return (
    <div>
      <Box className="lg:w-[100%]">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowDoubleClick={handleRowDoubleClick}
          components={{
            noRowsOverlay: filteredUsers.length > 0 ? null : NoRecordRow,
          }}
          sx={{
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
          }}
        />
      </Box>
    </div>
  );
}
