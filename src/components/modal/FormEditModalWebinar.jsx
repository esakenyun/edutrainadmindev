import { useEffect, useState } from "react";
import { Button, Modal, TextField, TextareaAutosize, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

import axios from "axios";
import Cookies from "js-cookie";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleEditWebinar } from "@/helpers/webinarHelper";
import { toast } from "sonner";

function formatDateTimeForInput(dateTimeString) {
  const date = new Date(dateTimeString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Page1 = ({ handleChange, webinarData }) => (
  <>
    <TextField type="text" label="Title" name="title" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("title")} defaultValue={webinarData?.title} />
    <TextareaAutosize maxRows={3} placeholder="Description" name="description" className=" border border-gray-300 rounded-md p-2 w-full" onChange={handleChange("description")} defaultValue={webinarData?.description} />
    <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("price")} defaultValue={webinarData?.lastWebinarHistory?.price} />
  </>
);

const Page2 = ({ formData, handleChange, webinarData }) => (
  <>
    <label htmlFor="Date">Start Time</label>
    <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full" onChange={handleChange("startTime")} defaultValue={formatDateTimeForInput(webinarData?.startTime)} />
    <label htmlFor="Date">End Time</label>
    <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full" onChange={handleChange("endTime")} defaultValue={formatDateTimeForInput(webinarData?.endTime)} />
    <InputCategoryCreatable
      inputSize="small"
      className="mb-4 w-full"
      selectedCategories={formData.category}
      onSelectCategories={(selectedCategory) => handleChange("categoryName")({ target: { value: selectedCategory ? selectedCategory.name : "" } })}
    />
    <InputSubCategoryCreatable
      inputSize="small"
      className="w-full"
      selectedSubCategories={formData.subCategory}
      onSelectSubCategories={(selectedSubCategory) => handleChange("subCategoryName")({ target: { value: selectedSubCategory ? selectedSubCategory.name : "" } })}
    />
  </>
);

const Page3 = ({ formData, handleChange, setBannerFile, webinarData }) => (
  <>
    <TextField label="Participants" margin="normal" name="maxAttendees" type="number" size="small" className="w-full mb-4" onChange={handleChange("maxAttendees")} defaultValue={webinarData?.maxAttendees} />
    <FormControl className="w-full mb-4">
      <InputLabel id="certificate-select-label">Event Status</InputLabel>
      <Select labelId="certificate-select-label" id="certificate-select" label="Event Status" onChange={handleChange("eventStatus")} defaultValue={webinarData?.eventStatus}>
        <MenuItem value="OFFLINE">Offline</MenuItem>
        <MenuItem value="ONLINE">Online</MenuItem>
      </Select>
    </FormControl>
    <label htmlFor="Banner">Banner tes ini di webinar</label>
    <TextField type="file" accept="image/*" name="banner" onChange={(e) => setBannerFile(e.target.files[0])} />
  </>
);

export default function FormEditModalWebinar({ currentData, isOpen, onClose }) {
  useEffect(() => {
    // console.log(currentData);
    setWebinarData(currentData);
    setFormData(currentData);
  }, [currentData, isOpen]);

  const [webinarData, setWebinarData] = useState(currentData);
  const [activePage, setActivePage] = useState(1);
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    eventStatus: "",
    maxAttendees: "",
    price: "",
    categoryId: "",
    subCategoryId: "",
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
    const formDataWebinar = {
      title: formData.title,
      description: formData.description,
      startTime: formData.startTime,
      endTime: formData.endTime,
      eventStatus: formData.eventStatus,
      maxAttendees: formData.maxAttendees,
      price: formData.price,
      categoryId: formData.categoryId,
      subCategoryId: formData.subCategoryId,
      categoryName: formData.categoryName,
      subCategoryName: formData.subCategoryName,
      banner: bannerFile,
    };

    // for (const key in formData) {
    //   formDataWebinar.append(key, formData[key]);
    // }

    // formDataWebinar.append("banner", bannerFile);
    setLoading(true);
    const response = await handleEditWebinar(currentData.id, formDataWebinar);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Webinar Updated Successfully");
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
          <h2 className="text-xl font-bold mb-4">Edit Webinar</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} webinarData={webinarData} />}
          {activePage === 2 && <Page2 formData={formData} handleChange={handleChange} webinarData={webinarData} />}
          {activePage === 3 && <Page3 formData={formData} handleChange={handleChange} setBannerFile={setBannerFile} webinarData={webinarData} />}

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
                disabled={loading || formData.title.trim() === "" || formData.description.trim() === "" || formData.startTime.trim() === "" || formData.endTime.trim() === "" || formData.eventStatus.trim() === ""}>
                {loading ? "Updating..." : "Update"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
