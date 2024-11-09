"use client";
import { useState } from "react";
import { Button, Modal } from "@mui/material";
import { toast } from "sonner";
import { handleAddVideoContent } from "@/helpers/videoContentHelper";

export default function FormModalVideo({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
  });
  const [loading, setLoading] = useState(false);

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
    const response = await handleAddVideoContent(formData);
    setLoading(false);
    // console.log(response);
    if (response.status === 201) {
      toast.success("Video Content Added Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Video Content</h2>

        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <label htmlFor="Title" className="text-white">
              {" "}
              Title
            </label>
            <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Title" value={formData.title} onChange={handleChange("title")} required />
            {/* <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="URL" onChange={handleChange("url")} required /> */}
            <label htmlFor="URL" className="text-white">
              {" "}
              Video URL
            </label>
            <textarea name="url" id="url" className="text-black w-full py-3 px-2 rounded-md outline-none" placeholder="https://www.youtube.com/embed/fdaSaaU-ck?si=s4qSLa12yp" value={formData.url} onChange={handleChange("url")} required />
            <p className="text-sm text-red-400 font-semibold">* Untuk URL Video Gunakan Yang Embed pada Youtube</p>
          </div>

          <div className="flex justify-end">
            <Button variant="contained" color="primary" className="bg-white text-white py-2 px-4 rounded-md" type="submit" disabled={loading || formData.title.trim() === "" || formData.url.trim() === ""}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
