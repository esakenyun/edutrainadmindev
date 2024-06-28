import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "Tanggal",
    width: 200,
    editable: false,
    renderHeader: () => <div className="text-[#343A40]">Tanggal</div>,
    renderCell: (params) => <div className="text-[#6C757D]">{params.value}</div>,
  },
  {
    field: "Jenis",
    width: 100,
    renderHeader: () => <div className="text-[#343A40] pl-5">Jenis</div>,
    renderCell: (params) => {
      const jenis = params.value.toLowerCase();
      if (jenis === "webinar") {
        return (
          <div className="bg-primary-blue">
            <div className="text-primary-white text-center">{params.value}</div>
          </div>
        );
      } else if (jenis === "workshop") {
        return (
          <div className="bg-warm-red">
            <div className="text-primary-white text-center">{params.value}</div>
          </div>
        );
      } else {
        return (
          <div className="bg-primary-green">
            <div className="text-primary-white text-center">{params.value}</div>
          </div>
        );
      }
    },
  },
  {
    field: "NamaKelas",
    width: 400,
    renderHeader: () => <div className="text-[#343A40]">Nama Kelas</div>,
    renderCell: (params) => <div className="text-[#6C757D] break-words w-full">{params.value}</div>,
  },
  {
    field: "Harga",
    width: 180,
    renderHeader: () => <div className="text-[#343A40]">Harga</div>,
    renderCell: (params) => <div className="text-[#6C757D]">Rp{params.value}</div>,
  },
  {
    field: "NotaTransaksi",
    width: 180,
    renderHeader: () => <div className="text-[#343A40]">Nota Transaksi</div>,
    renderCell: () => (
      <div className="text-secondary-activeblue underline cursor-pointer hover:text-primary-blue">
        <p>Bukti Pembayaran</p>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Tanggal: "September 9, 2022", Jenis: "Webinar", NamaKelas: "Implementasi Sistem Absensi Siswa menggunakan OpenCV: Pengenalan dan Aplikasi Praktis", Harga: 50000 },
  { id: 2, Tanggal: "September 1, 2021", Jenis: "Workshop", NamaKelas: "UIN SGD Bandung - Mahasiswa", Harga: 10000 },
  { id: 3, Tanggal: "September 1, 2021", Jenis: "Training", NamaKelas: "UIN SGD Bandung - Mahasiswa", Harga: 10000 },
];

export default function UserTransactionHistoryTable() {
  return (
    <Box className="lg:w-[100%]">
      <DataGrid rows={rows} columns={columns} pageSize={8} rowsPerPageOptions={[8]} disableRowSelectionOnClick hideFooter />
    </Box>
  );
}
