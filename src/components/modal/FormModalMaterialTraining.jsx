import { handleAddDocumentMaterialTraining } from "@/helpers/trainingHelper";
import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";

export default function FormModalMaterialTraining({ open, onClose, trainingData }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [documentFile, setDocumentFile] = useState(null);

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!documentFile) {
      toast.error("Please select a document file.");
      return;
    }

    const formDataMaterialTraining = {
      title: formData.title,
      description: formData.description,
      document: documentFile,
    };

    console.log(trainingData.id);

    setLoading(true);
    const response = await handleAddDocumentMaterialTraining(trainingData.id, formDataMaterialTraining);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Add Document Material Training Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md border-none">
        <h2 className="text-xl font-bold mb-4">Add Material Document</h2>

        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="pb-3">
            <TextField
              type="text"
              label="Title"
              name="title"
              margin="normal"
              size="small"
              className="mb-4 w-full"
              onChange={handleChange("title")}
              value={formData.title}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <TextField
              type="text"
              label="Description"
              name="description"
              margin="normal"
              size="small"
              className="mb-4 w-full"
              onChange={handleChange("description")}
              value={formData.description}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <label htmlFor="Documet">Document</label>
            <p className="text-sm mb-0.5 font-medium text-red-600">*filetype .pdf, .doc, .xls, .xlsx, .ppt, .pptx, .mdb, .docx </p>
            <TextField
              type="file"
              name="document"
              onChange={(e) => setDocumentFile(e.target.files[0])}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
          <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md" onClick={handleSubmit} disabled={loading || formData.title.trim() === ""}>
            {loading ? "Submit.." : "Submit"}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
