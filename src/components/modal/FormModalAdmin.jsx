"use client";
import { useState } from "react";
import { Button, Modal } from "@mui/material";
import { handleAddAdminAccount } from "@/helpers/adminAccountHelper";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function FormModalAdmin({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    if (field === "email") {
      const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await handleAddAdminAccount(formData);
    setLoading(false);
    // console.log(response);
    if (response.status === 201) {
      toast.success("Admin Account Created Successfully");
      window.location.reload();
    }
    if (response === false) {
      toast.error("Admin Account Not Created");
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Admin</h2>

        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Fullname" onChange={handleChange("fullname")} required />
            <input type="email" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Email Address" onChange={handleChange("email")} required />
            {emailError && <p className="text-sm text-red-500 pb-2">{emailError}</p>}
            <input type="password" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Password" onChange={handleChange("password")} required />
            <p className="text-sm text-red-500 font-semibold">* Password Must Be 8 Characters</p>
          </div>

          <div className="flex justify-end">
            <Button
              variant="contained"
              color="primary"
              className="bg-white text-white py-2 px-4 rounded-md"
              type="submit"
              disabled={loading || formData.password.length < 8 || formData.fullname.trim() === "" || formData.email.trim() === "" || emailError !== ""}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
