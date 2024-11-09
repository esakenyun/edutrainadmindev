import { handleDeleteFAQ, handleFetchFAQData } from "@/helpers/faqHelper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";

import DeleteModal from "../modal/DeleteModal";
import FormEditModalFAQ from "../modal/FormEditModalFAQ";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import { Ban, CreditCard, DollarSign, Mail, Tag, Truck } from "lucide-react";

const iconMap = {
  Mail: <Mail className="text-2xl text-primary-white" />,
  CreditCard: <CreditCard className="text-2xl text-primary-white" />,
  Truck: <Truck className="text-2xl text-primary-white" />,
  DollarSign: <DollarSign className="text-2xl text-primary-white" />,
  Ban: <Ban className="text-2xl text-primary-white" />,
  Tag: <Tag className="text-2xl text-primary-white" />,
};

const FaqInfoCard = ({ id, question, answer, icon, openModalDelete, openModalEdit, tag }) => {
  return (
    <div className="w-full mb-2">
      <div className="bg-primary-white shadow-2xl rounded-lg">
        <div className="px-5 py-2">
          <div className="flex gap-2 items-center">
            <div className="bg-primary-blue rounded-full py-3 px-3">{iconMap[icon] || <CiMail className="text-2xl text-white" />}</div>
            <p className="font-medium text-primary-darkblue">{question}</p>
          </div>
          <p className="text-xs pt-3 pb-1 text-[#53686A]">Tag: {tag}</p>
          <p className="text-sm text-[#53686A]">{answer}</p>
          <div className="flex gap-3 mt-3">
            <button className="flex items-center gap-3 rounded-lg bg-secondary-activeblue text-primary-white  hover:scale-105 py-1 px-6" onClick={() => openModalEdit(id)}>
              <BsPencil />
              <p>Ubah</p>
            </button>
            <button className="flex items-center gap-3  rounded-lg bg-warm-red text-primary-white  hover:scale-105 py-1 px-6" onClick={() => openModalDelete(id)}>
              <FaRegTrashAlt />
              Hapus
            </button>
          </div>
        </div>
        {/* <div className="flex gap-3 py-2 px-5 justify-start items-center">
          <div className="bg-primary-blue rounded-full py-3 px-3">
            <CiMail className="text-2xl text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-primary-darkblue">{question} Contrary to popular belief, Lorem Ipsum is not simply</p>
            <p className="text-primary-darkblue">{answer}</p>
            <p>{icon}</p>
            <div className="flex gap-3 mt-3">
              <button className="w-full rounded-lg bg-secondary-activeblue text-primary-white font-bold hover:scale-105 py-1" onClick={() => openModalEdit(id)}>
                Ubah
              </button>
              <button className="w-full rounded-lg bg-warm-red text-primary-white font-bold hover:scale-105 py-1" onClick={() => openModalDelete(id)}>
                Hapus
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const groupByTag = (faqData) => {
  return faqData.reduce((groups, faq) => {
    const tag = faq.tag || "No tag";
    if (!groups[tag]) {
      groups[tag] = [];
    }
    groups[tag].push(faq);
    return groups;
  }, {});
};

export default function FAQCard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [faqData, setFaqData] = useState([]);
  const [formEditIsOpenId, setFormEditIsOpenId] = useState(null);
  const [openModalDeleteId, setOpenModalDeleteId] = useState(null);
  const [editFaqData, setEditFaqData] = useState(null);

  const fetchAllFaq = async () => {
    const response = await handleFetchFAQData();
    // console.log(response);
    setFaqData(response);
    setLoading(false);
  };

  const handleCloseFormEdit = () => {
    setFormEditIsOpenId(null);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDeleteId(null);
  };

  const handleDeleteConfirm = async () => {
    const response = await handleDeleteFAQ(openModalDeleteId);
    if (response.status === 200) {
      toast.success("FAQ Deleted Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.message);
    }
    setOpenModalDeleteId(null);
    router.refresh();
  };

  const openModalEdit = (id) => {
    const faqToEdit = faqData.find((faq) => faq.id === id);
    setEditFaqData(faqToEdit);
    setFormEditIsOpenId(id);
  };

  const openModalDelete = (id) => {
    setOpenModalDeleteId(id);
  };

  useEffect(() => {
    fetchAllFaq();
  }, [openModalDeleteId, formEditIsOpenId]);

  if (loading) {
    return <div className="flex justify-center items-center pt-20">Loading...</div>;
  }

  if (!faqData || faqData.length === 0) {
    return <div className="flex justify-center items-center pt-20 text-secondary-grey">No Data FAQ Found</div>;
  }

  const groupedFaqs = groupByTag(faqData);

  return (
    <div>
      {Object.keys(groupedFaqs).map((tag) => (
        <div key={tag} className="mb-8">
          <h2 className="font-bold text-xl text-primary-blue mb-4 border-b-2 pb-2 w-fit px-5 border-primary-blue ">{tag}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {groupedFaqs[tag].map((faq) => (
              <FaqInfoCard key={faq.id} {...faq} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
            ))}
          </div>
        </div>
      ))}
      <DeleteModal open={openModalDeleteId !== null} onClose={handleCloseModalDelete} onConfirm={handleDeleteConfirm} title="Apa anda yakin ingin menghapus FAQ ini ?" description="Data-data terkait FAQ akan terhapus secara permanen." />
      <FormEditModalFAQ isOpen={formEditIsOpenId !== null} onClose={handleCloseFormEdit} faqData={editFaqData} />
    </div>
  );
}
