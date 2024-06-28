import axios from "axios";
import { Button, Modal, TextField, TextareaAutosize, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleAddWorkshop } from "@/helpers/workshopHelper";
import { toast } from "sonner";

const Page1 = ({ formData, handleChange }) => (
  <>
    <TextField type="text" label="Title" name="title" margin="normal" size="small" className="mb-4 w-full" value={formData.title} onChange={handleChange("title")} />
    <TextareaAutosize minRows={3} placeholder="Description" name="description" className=" border border-gray-300 rounded-md p-2 w-full" value={formData.description} onChange={handleChange("description")} />
    <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" value={formData.price} onChange={handleChange("price")} />
    <TextField type="text" label="Instructor" name="instructor" margin="normal" size="small" className="mb-4 w-full" value={formData.instructor} onChange={handleChange("instructor")} />
  </>
);

const Page2 = ({ formData, handleChange }) => (
  <>
    <label htmlFor="Date">Start Time</label>
    <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full" value={formData.startTime} onChange={handleChange("startTime")} />
    <label htmlFor="Date">End Time</label>
    <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full" value={formData.endTime} onChange={handleChange("endTime")} />
    <InputCategoryCreatable
      inputSize="small"
      className="mb-4 w-full"
      selectedCategories={formData.categoryName}
      onSelectCategories={(selectedCategory) => handleChange("categoryName")({ target: { value: selectedCategory ? selectedCategory.name : "" } })}
    />
    <InputSubCategoryCreatable
      inputSize="small"
      className="w-full"
      selectedSubCategories={formData.subCategoryName}
      onSelectSubCategories={(selectedSubCategory) => handleChange("subCategoryName")({ target: { value: selectedSubCategory ? selectedSubCategory.name : "" } })}
    />
  </>
);

const Page3 = ({ formData, handleChange, setBannerFile }) => (
  <>
    {/* <TextField label="Participants" margin="normal" name="maxAttendees" type="number" size="small" className="w-full mb-4" value={formData.maxAttendees} onChange={handleChange("maxAttendees")} /> */}
    <FormControl className="w-full mb-4">
      <InputLabel id="eventstatus-select-label">Event Status</InputLabel>
      <Select labelId="eventstatus-select-label" id="eventstatus-select" value={formData.status} label="Event Status" onChange={handleChange("status")}>
        <MenuItem value="LIVE">Live</MenuItem>
        <MenuItem value="PLAYBACK">Playback</MenuItem>
      </Select>
    </FormControl>
    <label htmlFor="Banner">Banner</label>
    <TextField type="file" accept="image/*" name="banner" onChange={(e) => setBannerFile(e.target.files[0])} />
  </>
);

export default function FormModalWorkshop({ isOpen, onClose }) {
  const [activePage, setActivePage] = useState(1);
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    instructor: "",
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
    const formDataWorkshop = new FormData();

    for (const key in formData) {
      formDataWorkshop.append(key, formData[key]);
    }

    formDataWorkshop.append("banner", bannerFile);
    console.log("FormData being submitted:", Object.fromEntries(formDataWorkshop));

    setLoading(true);
    const response = await handleAddWorkshop(formDataWorkshop);
    setLoading(false);
    if (response.status === 201) {
      toast.success("Workshop Created Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form method="POST" encType="multipart/form-data">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Add Workshop</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} />}
          {activePage === 2 && <Page2 formData={formData} handleChange={handleChange} />}
          {activePage === 3 && <Page3 formData={formData} handleChange={handleChange} setBannerFile={setBannerFile} />}

          <div className="flex justify-between mt-4">
            {activePage > 1 && (
              <Button variant="outlined" color="primary" onClick={handlePrev}>
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
                  formData.instructor === "" ||
                  formData.startTime.trim() === "" ||
                  formData.endTime.trim() === "" ||
                  formData.categoryName.trim() === "" ||
                  formData.subCategoryName.trim() === "" ||
                  formData.status.trim() === ""
                }>
                {loading ? "Loading..." : "Submit"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
