import { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";

import axios from "axios";
import Cookies from "js-cookie";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleEditWebinar } from "@/helpers/webinarHelper";
import { toast } from "sonner";

function formatDateTimeForInput(dateTimeString) {
  const date = new Date(dateTimeString);

  date.setHours(date.getHours() - 7);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Page1 = ({ handleChange, webinarData, formData }) => (
  <>
    <label htmlFor="title" className="text-primary-white">
      Title
    </label>
    <input type="text" name="title" id="title" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" onChange={handleChange("title")} value={formData.title} />
    <label htmlFor="description" className="text-primary-white">
      Description
    </label>
    <textarea name="description" id="description" rows={3} className="text-black w-full rounded-md py-3 px-2 outline-none mb-2" value={formData.description} onChange={handleChange("description")} required></textarea>
    <label htmlFor="price" className="text-primary-white">
      Price
    </label>
    <p className="text-red-600 text-xs mb-1 font-medium">*price tidak boleh kosong</p>
    <input type="number" name="price" id="price" min={1} className="text-black w-full py-3 px-2 rounded-md outline-none" onChange={handleChange("price")} defaultValue={webinarData?.lastWebinarHistory?.price} />
  </>
);

const Page2 = ({ formData, handleChange, webinarData }) => (
  <>
    <label htmlFor="startTime" className="text-primary-white">
      Start Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" onChange={handleChange("startTime")} defaultValue={formatDateTimeForInput(webinarData?.startTime)} />
    <label htmlFor="endTime" className="text-primary-white">
      End Time
    </label>
    <input type="datetime-local" className="w-full mb-2 py-3 px-2 rounded-md outline-none" onChange={handleChange("endTime")} defaultValue={formatDateTimeForInput(webinarData?.endTime)} />
    <InputCategoryCreatable inputSize="small" selectedCategories={formData.category} onSelectCategories={(selectedCategory) => handleChange("categoryName")({ target: { value: selectedCategory ? selectedCategory.name : "" } })} />
    <InputSubCategoryCreatable
      inputSize="small"
      selectedSubCategories={formData.subCategory}
      onSelectSubCategories={(selectedSubCategory) => handleChange("subCategoryName")({ target: { value: selectedSubCategory ? selectedSubCategory.name : "" } })}
    />
  </>
);

const Page3 = ({ formData, handleChange, setBannerFile, webinarData }) => (
  <>
    <label htmlFor="participants" className="text-primary-white">
      Participants
    </label>
    <input type="number" name="participants" id="participants" className="text-black w-full mb-2 py-3 px-2 rounded-md outline-none" onChange={handleChange("maxAttendees")} defaultValue={webinarData?.maxAttendees} />
    <label htmlFor="eventStatus" className="text-primary-white">
      Event Status
    </label>
    <select name="eventStatus" id="eventStatus" className="w-full py-3 px-2 rounded-md mb-2" onChange={handleChange("eventStatus")} defaultValue={webinarData?.eventStatus}>
      <option value="null" disabled>
        Select Your Event Status
      </option>
      <option value="OFFLINE">Offline</option>
      <option value="ONLINE">Online</option>
    </select>
    <label htmlFor="Banner" className="text-primary-white">
      Banner (280 x 160)
    </label>
    <input type="file" accept="image/*" name="banner" className="w-full bg-primary-white py-3 px-2 rounded-md" onChange={(e) => setBannerFile(e.target.files[0])} />
  </>
);

export default function FormEditModalWebinar({ currentData, isOpen, onClose }) {
  useEffect(() => {
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
    if (formData.price < 0) {
      toast.error("Price must be at least 0.");
      return;
    }

    if (formData.maxAttendees === undefined || formData.maxAttendees === null || formData.maxAttendees === "" || formData.maxAttendees < 0) {
      toast.error("Participant must be at least 0.");
      return;
    }

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-primary-blue rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 text-primary-white">Ubah Webinar</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} webinarData={webinarData} />}
          {activePage === 2 && <Page2 formData={formData} handleChange={handleChange} webinarData={webinarData} />}
          {activePage === 3 && <Page3 formData={formData} handleChange={handleChange} setBannerFile={setBannerFile} webinarData={webinarData} />}

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
