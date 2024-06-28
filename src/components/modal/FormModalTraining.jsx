import { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleAddTraining } from "@/helpers/trainingHelper";
import { toast } from "sonner";

const Page1 = ({ formData, handleChange, handleChangeShowPrice }) => (
  <>
    <label htmlFor="title" className="text-primary-white">
      Title
    </label>
    <input type="text" name="title" id="title" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Title" value={formData.title} onChange={handleChange("title")} required />
    {/* <TextField type="text" label="Title" name="title" margin="normal" size="small" className="mb-4 w-full" value={formData.title} onChange={handleChange("title")} /> */}
    <label htmlFor="description" className="text-primary-white">
      Description
    </label>
    <textarea
      name="description"
      id="description"
      className="text-black w-full rounded-md py-3 px-2 outline-none mb-2"
      placeholder="Description"
      rows={3}
      value={formData.description}
      onChange={handleChange("description")}
      required></textarea>
    {/* <TextareaAutosize minRows={3} placeholder="Description" name="description" className=" border border-gray-300 rounded-md p-2 w-full border-collapse" value={formData.description} onChange={handleChange("description")} /> */}
    <label htmlFor="Sylabus" className="text-primary-white">
      Sylabus
    </label>
    <textarea name="syllabus" id="syllabus" className="text-black w-full rounded-md py-3 px-2 outline-none mb-2" placeholder="Syllabus" rows={3} value={formData.syllabus} onChange={handleChange("syllabus")}></textarea>
    <label htmlFor="price" className="text-primary-white">
      Price
    </label>
    <input type="number" name="price" id="price" className="text-black w-full py-3 px-2 rounded-md outline-none" placeholder="Price" value={formData.price} onChange={handleChange("price")} required />
    {/* <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" value={formData.price} onChange={handleChange("price")} /> */}
    <div className="w-fit bg-white py-2 flex gap-3 items-center mt-3 p-2 rounded-md">
      <label htmlFor="showPrice" className="text-secondary-grey">
        Show Price
      </label>
      <input type="checkbox" name="showPriceInput" id="ShowPriceInput" className="h-4 w-4" value={formData.showPrice} onChange={handleChangeShowPrice("showPrice")} />
    </div>
  </>
);

const Page2 = ({ formData, handleChange }) => (
  <>
    <label htmlFor="startTime" className="text-primary-white">
      Start Time
    </label>
    <input type="datetime-local" className="w-full mb-4 py-3 px-2 rounded-md outline-none" value={formData.startTime} onChange={handleChange("startTime")} />
    {/* <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full rounded-md" value={formData.startTime} onChange={handleChange("startTime")} sx={{ backgroundColor: "white" }} /> */}
    <label htmlFor="endTime" className="text-primary-white">
      End Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" value={formData.endTime} onChange={handleChange("endTime")} />
    {/* <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full rounded-md" value={formData.endTime} onChange={handleChange("endTime")} sx={{ backgroundColor: "white" }} /> */}
    <InputCategoryCreatable inputSize="small" selectedCategories={formData.categoryName} onSelectCategories={(selectedCategory) => handleChange("categoryName")({ target: { value: selectedCategory ? selectedCategory.name : "" } })} />
    <InputSubCategoryCreatable
      inputSize="small"
      selectedSubCategories={formData.subCategoryName}
      onSelectSubCategories={(selectedSubCategory) => handleChange("subCategoryName")({ target: { value: selectedSubCategory ? selectedSubCategory.name : "" } })}
    />
  </>
);

const Page3 = ({ formData, handleChange, setBannerFile }) => (
  <>
    {/* <TextField label="Participants" margin="normal" name="maxAttendees" type="number" size="small" className="w-full mb-4" value={formData.maxAttendees} onChange={handleChange("maxAttendees")} />
    <FormControl className="w-full mb-4">
      <InputLabel id="eventstatus-select-label">Event Status</InputLabel>
      <Select labelId="eventstatus-select-label" id="eventstatus-select" value={formData.eventStatus} label="Event Status" onChange={handleChange("eventStatus")}>
        <MenuItem value="OFFLINE">Offline</MenuItem>
        <MenuItem value="ONLINE">Online</MenuItem>
      </Select>
    </FormControl> */}
    {/* <div className="my-2">
      <FormControl className="w-full">
        <InputLabel id="certificate-select-label">Certificate</InputLabel>
        <Select labelId="certificate-select-label" id="certificate-select" value={formData.certificate} label="Certificate" onChange={handleChange("certificate")}>
          <MenuItem value="Sertifikat">Sertifikat</MenuItem>
          <MenuItem value="Tanpa Sertifikat">Tanpa Sertifikat</MenuItem>
        </Select>
      </FormControl>
    </div> */}
    <label htmlFor="Status" className="text-primary-white">
      Status
    </label>
    <select name="status" id="Status" className="w-full py-3 px-2 rounded-md mb-4" value={formData.status} onChange={handleChange("status")}>
      <option value="null">Select Your Status</option>
      <option value="ONLINE">Online</option>
      <option value="OFFLINE">Offline</option>
      <option value="HYBRID">Hybrid</option>
    </select>
    <label htmlFor="Discount" className="text-primary-white">
      Discount (0-100%)
    </label>
    <input type="number" name="discount" placeholder="Discount" className="w-full mb-4 py-3 px-2 rounded-md outline-none" value={formData.discount} onChange={handleChange("discount")} required />
    {/* <TextField type="number" label="Discount" name="discount" margin="normal" size="small" className="mb-4 w-full rounded-md" value={formData.discount} onChange={handleChange("discount")} sx={{ backgroundColor: "white" }} /> */}
    <label htmlFor="Banner" className="text-primary-white">
      Banner : 280 x 160
    </label>
    <input type="file" accept="image/*" name="banner" className="w-full bg-primary-white  py-3 px-2 rounded-md" onChange={(e) => setBannerFile(e.target.files[0])} required />
    {/* <TextField type="file" accept="image/*" name="banner" onChange={(e) => setBannerFile(e.target.files[0])} className="h-fit" required sx={{ backgroundColor: "white" }} /> */}
  </>
);

export default function FormModalTraining({ isOpen, onClose }) {
  const [activePage, setActivePage] = useState(1);
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    syllabus: "",
    startTime: "",
    endTime: "",
    discount: "",
    status: "",
    price: "",
    categoryName: "",
    subCategoryName: "",
    showPrice: false,
  });

  const handleChange = (field) => (e) => {
    let value = e.target.value;

    if (field === "discount") {
      value = Math.max(0, Math.min(100, parseInt(value)));
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleChangeShowPrice = (field) => (e) => {
    const isChecked = e.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      [field]: isChecked,
    }));
  };

  const handleNext = () => {
    setActivePage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setActivePage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const handleSubmit = async () => {
    const formDataTraining = new FormData();

    for (const key in formData) {
      formDataTraining.append(key, formData[key]);
    }

    formDataTraining.append("banner", bannerFile);

    setLoading(true);
    const response = await handleAddTraining(formDataTraining);
    setLoading(false);
    if (response.status === 201) {
      toast.success("Training Added Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form method="POST" encType="multipart/form-data">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-primary-blue rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 text-white">Tambah Training</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} handleChangeShowPrice={handleChangeShowPrice} />}
          {activePage === 2 && <Page2 formData={formData} handleChange={handleChange} />}
          {activePage === 3 && <Page3 formData={formData} handleChange={handleChange} setBannerFile={setBannerFile} />}

          <div className="flex justify-between mt-4">
            {activePage > 1 && (
              <Button variant="outlined" color="inherit" onClick={handlePrev}>
                Back
              </Button>
            )}
            {activePage < 3 ? (
              <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                onClick={handleSubmit}
                disabled={
                  loading ||
                  formData.title.trim() === "" ||
                  formData.description.trim() === "" ||
                  formData.syllabus.trim() === "" ||
                  formData.price.trim() === "" ||
                  formData.startTime.trim() === "" ||
                  formData.endTime.trim() === "" ||
                  formData.categoryName.trim() === ""
                }>
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
