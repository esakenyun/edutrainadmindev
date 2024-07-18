import axios from "axios";
import { Button, Modal } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleAddWorkshop } from "@/helpers/workshopHelper";
import { toast } from "sonner";

const Page1 = ({ formData, handleChange }) => (
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
    {/* <TextareaAutosize minRows={3} placeholder="Description" name="description" className=" border border-gray-300 rounded-md p-2 w-full" value={formData.description} onChange={handleChange("description")} /> */}
    <label htmlFor="price" className="text-primary-white">
      Price
    </label>
    <input type="number" name="price" id="price" min={1} className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Price" value={formData.price} onChange={handleChange("price")} />
    {/* <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" value={formData.price} onChange={handleChange("price")} /> */}
    <label htmlFor="instructor" className="text-primary-white">
      Instructor
    </label>
    <input type="text" name="instructor" id="instructor" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Instructor" value={formData.instructor} onChange={handleChange("instructor")} />
    {/* <TextField type="text" label="Instructor" name="instructor" margin="normal" size="small" className="mb-4 w-full" value={formData.instructor} onChange={handleChange("instructor")} /> */}
  </>
);

const Page2 = ({ formData, handleChange }) => (
  <>
    <label htmlFor="startTime" className="text-primary-white">
      Start Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" value={formData.startTime} onChange={handleChange("startTime")} />
    {/* <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full" value={formData.startTime} onChange={handleChange("startTime")} /> */}
    <label htmlFor="endTime" className="text-primary-white">
      End Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" value={formData.endTime} onChange={handleChange("endTime")} />
    {/* <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full" value={formData.endTime} onChange={handleChange("endTime")} /> */}
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
    <label htmlFor="Event Status" className="text-primary-white">
      Event Status
    </label>
    <select name="eventStatus" id="eventStatus" className="w-full py-3 px-2 rounded-md mb-2" value={formData.status} onChange={handleChange("status")}>
      <option value="null">Select Your Event Status</option>
      <option value="LIVE">Live</option>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-primary-blue rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 text-primary-white">Tambah Workshop</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} />}
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
