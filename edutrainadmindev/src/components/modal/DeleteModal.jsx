import { RxCross2 } from "react-icons/rx";
import { GrCircleQuestion } from "react-icons/gr";
import { Box, Modal } from "@mui/material";

const DeleteModal = ({ open, onClose, title, description, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[467px] py-7 px-8 bg-primary-blue shadow-md rounded-3xl">
        <div className="flex justify-end">
          <RxCross2 onClick={onClose} className="text-4xl text-[#BDBDBD] cursor-pointer" />
        </div>
        <div className="text-primary-white">
          <div className="flex flex-col items-center justify-center gap-3">
            <GrCircleQuestion className="text-7xl" />
            <h1 className="text-lg md:text-xl font-bold text-center">{title}</h1>
            <h1 className="text-xs md:text-sm">{description}</h1>
            <div className="flex items-center justify-center gap-2 py-2">
              <button onClick={handleConfirm} className="text-primary-white text-lg font-bold py-2 px-7 bg-secondary-activeblue rounded-lg">
                Ya
              </button>
              <button onClick={onClose} className="text-secondary-grey text-lg font-bold py-2 px-5 bg-secondary-lightmedium rounded-lg">
                Batalkan
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
