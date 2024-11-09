import { handleEditBanner } from "@/helpers/bannerHelper";
import { Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FormEditModalBanner({ isOpen, onClose, bannerData }) {
  const [bannerFile, setBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    setBannerFile(e.target.files[0]);
  };

  useEffect(() => {
    if (bannerData) {
      setFormData({
        title: bannerData.title,
      });
    }
  }, [bannerData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataBanner = new FormData();
    for (const key in formData) {
      formDataBanner.append(key, formData[key]);
    }
    formDataBanner.append("banner", bannerFile);
    setLoading(true);
    const response = await handleEditBanner(bannerData.id, formDataBanner);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Banner Updated Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Title" value={formData.title} onChange={handleChange("title")} required />
            <div className="bg-white rounded-md">
              <input type="file" accept="image/*" name="banner" required onChange={handleFileChange} className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
