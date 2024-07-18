import axios from "axios";
import { Button, Modal } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleEditWorkshop } from "@/helpers/workshopHelper";
import { toast } from "sonner";

function formatDateTimeForInput(dateTimeString) {
  const date = new Date(dateTimeString);

  date.setHours(date.getHours() - 7);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Page1 = ({ formData, handleChange, workshopData }) => (
  <>
    <label htmlFor="title" className="text-primary-white">
      Title
    </label>
    <input type="text" name="title" id="title" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" onChange={handleChange("title")} value={formData.title} />
    {/* <TextField type="text" label="Title" name="title" margin="normal" size="small" className="mb-4 w-full" value={formData.title} onChange={handleChange("title")} /> */}
    <label htmlFor="description" className="text-primary-white">
      Description
    </label>
    {/* <TextareaAutosize maxRows={3} placeholder="Description" name="description" className=" border border-gray-300 rounded-md p-2 w-full" value={formData.description} onChange={handleChange("description")} /> */}
    <textarea name="description" id="description" rows={3} className="text-black w-full rounded-md py-3 px-2 outline-none mb-2" value={formData.description} onChange={handleChange("description")} required></textarea>
    <label htmlFor="price" className="text-primary-white">
      Price
    </label>
    {/* <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("price")} value={formData.price} defaultValue={formData.lastWorkshopHistory.price} /> */}
    <input type="number" name="price" id="price" min={1} className="text-black w-full py-3 px-2 rounded-md outline-none mb-2" onChange={handleChange("price")} defaultValue={workshopData?.lastWorkshopHistory?.price} />
    <label htmlFor="instructor" className="text-primary-white">
      Instructor
    </label>
    <input type="text" name="title" id="title" className="text-black w-full py-3 px-2 rounded-md outline-none " onChange={handleChange("instructor")} value={formData.instructor} />
  </>
);

const Page2 = ({ formData, handleChange }) => (
  <>
    <label htmlFor="startTime" className="text-primary-white">
      Start Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" onChange={handleChange("startTime")} defaultValue={formatDateTimeForInput(formData.startTime)} />
    {/* <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full" value={formatDateTimeForInput(formData.startTime)} onChange={handleChange("startTime")} /> */}
    <label htmlFor="endTime" className="text-primary-white">
      End Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" onChange={handleChange("endTime")} defaultValue={formatDateTimeForInput(formData.endTime)} />
    {/* <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full" value={formatDateTimeForInput(formData.endTime)} onChange={handleChange("endTime")} /> */}
    <InputCategoryCreatable inputSize="small" selectedCategories={formData.category} onSelectCategories={(selectedCategory) => handleChange("categoryName")({ target: { value: selectedCategory ? selectedCategory.name : "" } })} />
    <InputSubCategoryCreatable
      inputSize="small"
      selectedSubCategories={formData.subCategory}
      onSelectSubCategories={(selectedSubCategory) => handleChange("subCategoryName")({ target: { value: selectedSubCategory ? selectedSubCategory.name : "" } })}
    />
  </>
);

const Page3 = ({ formData, handleChange, setBannerFile }) => (
  <>
    {/* <TextField label="Participants" margin="normal" name="maxAttendees" type="number" size="small" className="w-full mb-4" value={formData.maxAttendees} onChange={handleChange("maxAttendees")} /> */}
    <label htmlFor="eventStatus" className="text-primary-white">
      Event Status
    </label>
    <select name="eventStatus" id="eventStatus" className="w-full py-2 px-2 rounded-md mb-2" onChange={handleChange("status")} value={formData.status}>
      <option value="null">Select Your Event Status</option>
      <option value="LIVE">LIVE</option>
      <option value="PLAYBACK">Playback</option>
    </select>
    {/* <FormControl className="w-full mb-4">
      <InputLabel id="eventstatus-select-label">Event Status</InputLabel>
      <Select labelId="eventstatus-select-label" id="eventstatus-select" value={formData.status} label="Event Status" onChange={handleChange("status")}>
        <MenuItem value="LIVE">Live</MenuItem>
        <MenuItem value="PLAYBACK">Playback</MenuItem>
      </Select>
    </FormControl> */}
    <label htmlFor="Banner" className="text-primary-white">
      Banner (280 x 160)
    </label>
    <input type="file" accept="image/*" name="banner" className="w-full bg-primary-white py-3 px-2 rounded-md" onChange={(e) => setBannerFile(e.target.files[0])} />
    {/* <TextField type="file" accept="image/*" name="banner" onChange={(e) => setBannerFile(e.target.files[0])} /> */}
  </>
);

export default function FormEditModalWorkshop({ currentData, isOpen, onClose }) {
  const [workshopData, setWorkshopData] = useState(currentData);
  const [activePage, setActivePage] = useState(1);
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setWorkshopData(currentData);
    setFormData(currentData);
  }, [currentData, isOpen]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    startTime: "",
    endTime: "",
    status: "",
    // maxAttendees: "",
    price: "",
    // categoryId: "",
    // subCategoryId: "",
    categoryName: "",
    subCategoryName: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
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
    const formDataWorkshop = {
      title: formData.title,
      description: formData.description,
      startTime: formData.startTime,
      instructor: formData.instructor,
      endTime: formData.endTime,
      status: formData.status,
      price: formData.price,
      categoryName: formData.categoryName,
      subCategoryName: formData.subCategoryName,

      banner: bannerFile,
    };
    console.log(formDataWorkshop);

    setLoading(true);
    const response = await handleEditWorkshop(currentData.id, formDataWorkshop);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Workshop Updated Successfully");
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
          <h2 className="text-xl font-bold mb-4 text-primary-white">Ubah Workshop</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} workshopData={workshopData} />}
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
              <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" onClick={handleSubmit} disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
