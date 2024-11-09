import { handleEditTraining } from "@/helpers/trainingHelper";
import { Button, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FormModalURLGroupTraining({ open, onClose, trainingData }) {
  const [formData, setFormData] = useState({
    urlExternalTitle: "",
    urlExternal: "",
  });
  const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (trainingData) {
      setFormData({
        urlExternalTitle: trainingData.urlExternalTitle || "",
        urlExternal: trainingData.urlExternal || "",
      });
    }
  }, [trainingData]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!urlRegex.test(formData.urlExternal)) {
      toast.error("Invalid URL format. Please provide a valid URL.");
      return;
    }
    setLoading(true);
    const response = await handleEditTraining(trainingData.id, formData);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Add URL Group Training Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-primary-blue text-primary-white rounded-lg shadow-md border-none">
        <h2 className="text-xl font-bold mb-4">Edit URL Group Training</h2>

        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <TextField
              type="text"
              label="Title URL"
              name="urlExternalTitle"
              margin="normal"
              size="small"
              className="mb-4 w-full"
              onChange={handleChange("urlExternalTitle")}
              value={formData.urlExternalTitle}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <TextField
              type="url"
              label="URL"
              name="urlExternal"
              margin="normal"
              size="small"
              className="mb-4 w-full"
              onChange={handleChange("urlExternal")}
              value={formData.urlExternal}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            onClick={handleSubmit}
            disabled={loading || formData.urlExternalTitle.trim() === "" || formData.urlExternal.trim() === ""}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
}
