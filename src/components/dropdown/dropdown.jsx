import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { usePathname } from "next/navigation";

export default function Dropdown() {
  const [checkedItems, setCheckedItems] = useState({
    tanggal: false,
    nama: false,
  });

  const pathname = usePathname();

  const handleCheckboxChange = (name) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [name]: !prevItems[name],
    }));
  };

  const handleApplyButton = () => {
    // Add logic for applying changes, if needed
  };

  useEffect(() => {
    // Check if the current route is /payment
    const isPaymentRoute = pathname.includes("/payment");
    setShowNamaCheckbox(!isPaymentRoute);
  }, [pathname]);

  const [showNamaCheckbox, setShowNamaCheckbox] = useState(false);

  return (
    <div>
      <FormGroup>
        {showNamaCheckbox && <FormControlLabel control={<Checkbox checked={checkedItems.nama} onChange={() => handleCheckboxChange("nama")} />} label="Nama" className="text-gray-500" />}
        <FormControlLabel control={<Checkbox checked={checkedItems.tanggal} onChange={() => handleCheckboxChange("tanggal")} />} label="Tanggal" className="text-gray-500" />
        <div className="flex justify-end">
          <button onClick={handleApplyButton} className="pt-2 text-xs text-blue-500">
            Terapkan
          </button>
        </div>
      </FormGroup>
    </div>
  );
}
