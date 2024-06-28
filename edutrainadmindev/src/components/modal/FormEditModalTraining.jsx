import { useEffect, useState } from "react";
import { Button, Modal, TextField, TextareaAutosize } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import InputCategoryCreatable from "../input/InputCategoryCreatable";
import InputSubCategoryCreatable from "../input/InputSubCategoryCreatable";
import { handleEditTraining } from "@/helpers/trainingHelper";
import { toast } from "sonner";

function formatDateTimeForInput(dateTimeString) {
  const date = new Date(dateTimeString);
  date.setHours(date.getHours() - 7); // Mengurangi 7 jam
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Page1 = ({ formData, trainingData, handleChange, handleChangeShowPrice }) => (
  <>
    <TextField type="text" label="Title" name="title" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("title")} value={formData.title} />
    <label htmlFor="description">Description</label>
    <TextareaAutosize maxRows={3} placeholder="Description" name="description" className="border border-gray-300 rounded-md p-2 w-full border-collapse" onChange={handleChange("description")} value={formData.description} />
    <label htmlFor="description">Syllabus</label>
    <TextareaAutosize maxRows={3} placeholder="Syllabus" name="syllabus" className="border border-gray-300 rounded-md p-2 w-full border-collapse mb-2" onChange={handleChange("syllabus")} value={formData.syllabus} />
    <TextField type="number" label="Price" name="price" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("price")} defaultValue={trainingData.lastTrainingHistory.price} />
    <div className="w-fit bg-white py-2 flex gap-3 items-center mt-3 p-2 rounded-md">
      <label htmlFor="showPrice" className="text-secondary-grey">
        Show Price
      </label>
      <input type="checkbox" name="showPriceInput" id="ShowPriceInput" className="h-4 w-4" onChange={handleChangeShowPrice("showPrice")} checked={formData.showPrice} />
    </div>
  </>
);

const Page2 = ({ formData, trainingData, handleChange }) => (
  <>
    <label htmlFor="Date">Start Time</label>
    <TextField type="datetime-local" margin="normal" name="startTime" size="small" className="mb-4 w-full" onChange={handleChange("startTime")} defaultValue={formatDateTimeForInput(trainingData?.startTime)} />
    <label htmlFor="Date">End Time</label>
    <TextField type="datetime-local" margin="normal" name="endTime" size="small" className="mb-4 w-full" onChange={handleChange("endTime")} defaultValue={formatDateTimeForInput(trainingData?.endTime)} />
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

const Page3 = ({ formData, trainingData, handleChange, setBannerFile }) => (
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
    <label htmlFor="discount" className="text-primary-white">
      Discount (0-100%)
    </label>
    <input
      type="number"
      name="discount"
      placeholder="Discount"
      className="w-full mb-4 py-3 px-2 rounded-md border-[1px] border-black"
      value={formData.discount}
      defaultValue={trainingData.lastTrainingHistory.discount}
      onChange={handleChange("discount")}
      required
    />
    <TextField type="number" label="Discount" name="discount" margin="normal" size="small" className="mb-4 w-full" onChange={handleChange("discount")} defaultValue={trainingData.lastTrainingHistory.discount} />
    <label htmlFor="Banner">Banner</label>
    <TextField type="file" accept="image/*" name="banner" onChange={(e) => setBannerFile(e.target.files[0])} />
  </>
);

export default function FormEditModalTraining({ currentData, isOpen, onClose }) {
  useEffect(() => {
    setTrainingData(currentData);
    // console.log(currentData);
    setFormData(currentData);
  }, [currentData, isOpen]);

  const [trainingData, setTrainingData] = useState(currentData);
  const [activePage, setActivePage] = useState(1);
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: currentData.title,
    description: currentData.description,
    syllabus: currentData.syllabus,
    startTime: currentData.startTime,
    endTime: currentData.endTime,
    discount: currentData.discount,
    // eventStatus: "",
    price: "",
    categoryName: currentData.categoryName,
    subCategoryName: currentData.subCategoryName,
    showPrice: currentData.showPrice,
  });

  const handleChange = (field) => (e) => {
    let value = e.target.value;

    if (field === "discount") {
      value = Math.max(0, Math.min(100, parseInt(value)));
    }

    setFormData((prevData) => {
      return {
        ...prevData,
        [field]: value,
      };
    });
  };

  const handleChangeShowPrice = (field) => (e) => {
    const isChecked = e.target.checked;

    setFormData((prevData) => ({
      ...prevData,
      [field]: isChecked,
    }));

    console.log(isChecked);
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
    const formDataTraining = {
      title: formData.title,
      description: formData.description,
      syllabus: formData.syllabus,
      startTime: formData.startTime,
      endTime: formData.endTime,
      discount: formData.discount,
      // eventStatus: "",
      price: formData.price,
      categoryName: formData.categoryName,
      subCategoryName: formData.subCategoryName,
      banner: bannerFile,
      showPrice: formData.showPrice,
    };

    // for (const key in formData) {
    //   formDataTraining.append(key, formData[key]);
    // }

    // formDataTraining.append("banner", bannerFile);

    setLoading(true);
    const response = await handleEditTraining(currentData.id, formDataTraining);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Training Updated Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form method="POST" encType="multipart/form-data">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-primary-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Ubah Training</h2>

          {activePage === 1 && <Page1 formData={formData} handleChange={handleChange} handleChangeShowPrice={handleChangeShowPrice} trainingData={trainingData} />}
          {activePage === 2 && <Page2 formData={formData} handleChange={handleChange} trainingData={trainingData} />}
          {activePage === 3 && <Page3 formData={formData} handleChange={handleChange} setBannerFile={setBannerFile} trainingData={trainingData} />}

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
              <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" onClick={handleSubmit} disabled={loading}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
