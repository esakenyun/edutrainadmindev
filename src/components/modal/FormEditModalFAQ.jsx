import { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import { handleEditFAQ } from "@/helpers/faqHelper";
import { toast } from "sonner";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function FormEditModalFAQ({ isOpen, onClose, faqData }) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    tag: "",
    icon: "",
  });

  const [loading, setLoading] = useState(false);

  const iconTagMap = {
    Mail: "Mail",
    CreditCard: "Payment",
    Truck: "Status",
    DollarSign: "Refunds",
    Ban: "Policy",
    Tag: "Coupon",
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
      tag: field === "icon" ? iconTagMap[value] : prevData.tag,
    }));
  };

  useEffect(() => {
    if (faqData) {
      setFormData({
        question: faqData.question || "",
        answer: faqData.answer || "",
        tag: faqData.tag || "",
        icon: faqData.icon || "",
      });
    }
  }, [faqData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setLoading(true);
    const response = await handleEditFAQ(faqData.id, formData);
    if (response.status === 200) {
      toast.success("FAQ Updated Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    setLoading(false);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 lg:w-2/6 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md">
        <div className="flex gap-2 items-center text-xl font-bold mb-4">
          <FaRegQuestionCircle className="text-2xl" />
          Ubah FAQ
        </div>

        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <div className="flex gap-3">
              <div className="flex flex-col">
                <label htmlFor="icon">Icon</label>
                <select name="icon" id="icon" className="h-fit text-secondary-grey rounded-lg py-2 mt-[1.5px]" onChange={handleChange("icon")} value={formData.icon}>
                  <option value="Mail">Mail</option>
                  <option value="CreditCard">Payment</option>
                  <option value="Truck">Status</option>
                  <option value="DollarSign">Refunds</option>
                  <option value="Ban">Policy</option>
                  <option value="Tag">Coupon</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="Tag">Tag</label>
                <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="tag" onChange={handleChange("tag")} value={formData.tag} required />
              </div>
            </div>
            <label htmlFor="Question">Question</label>
            <input type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="Question" onChange={handleChange("question")} value={formData.question} required />
            <label htmlFor="Answer">Answer</label>
            <textarea type="text" className="text-black w-full py-3 px-2 rounded-md outline-none mb-3" placeholder="answer" onChange={handleChange("answer")} value={formData.answer} rows={3} required />
            <p className="text-sm text-red-500 font-semibold">* Set your Icon Name</p>
          </div>

          <div className="flex justify-end">
            <Button
              variant="contained"
              color="primary"
              className="bg-white text-white py-2 px-4 rounded-md"
              type="submit"
              disabled={loading || formData.question.trim() === "" || formData.answer.trim() === "" || formData.tag.trim() === "" || formData.icon.trim() === ""}>
              {loading ? "Loading..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
