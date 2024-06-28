import { useState, useEffect } from "react";
import { Button, Modal } from "@mui/material";
import { toast } from "sonner";
import { handleEditVideoContent } from "@/helpers/videoContentHelper";

export default function FormEditModalVideo({ open, onClose, videoData }) {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videoData) {
      console.log(videoData.id);
      setFormData({
        title: videoData.title || "",
        url: videoData.url || "",
      });
    }
  }, [videoData]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await handleEditVideoContent(videoData.id, formData);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Video Content Updated Successfully");
    } else if (response.error) {
      toast.error(response.message);
    }

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md border-none">
        <h2 className="text-xl font-bold mb-4">Edit Video Content</h2>

        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <label htmlFor="Title" className="text-white">
              {" "}
              Title
            </label>
            <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Title" onChange={handleChange("title")} value={formData.title} required />
            {/* <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="URL" onChange={handleChange("url")} value={formData.url} required /> */}
            <label htmlFor="URL" className="text-white">
              {" "}
              Video URL
            </label>
            <textarea name="url" id="url" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Video URL" onChange={handleChange("url")} value={formData.url} required />
            <p className="text-sm text-red-500 font-semibold">* Give URL Video</p>
          </div>

          <div className="flex justify-end">
            <Button variant="contained" color="primary" className="bg-white text-white py-2 px-4 rounded-md" type="submit" disabled={loading || formData.title.trim() === "" || formData.url.trim() === ""}>
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
