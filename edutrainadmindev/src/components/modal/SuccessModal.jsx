import { RxCross2 } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Box, Modal } from "@mui/material";

const SuccessModal = ({ open, onClose, title, description }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[450px] py-3 px-8 bg-primary-blue shadow-md rounded-3xl">
        <div className="flex justify-end">
          <RxCross2 onClick={onClose} className="text-4xl text-[#BDBDBD] cursor-pointer" />
        </div>
        <div className="text-primary-white">
          <div className="flex flex-col items-center justify-center gap-3">
            <FaRegCircleCheck className="text-7xl" />
            <h1 className="text-xs md:text-xl font-bold text-center">{title}</h1>
            <h1 className="text-xs md:text-sm">{description}</h1>
            <div className="flex items-center justify-center gap-2 py-2">
              <button onClick={onClose} className="text-primary-white text-lg font-bold py-2 px-7 bg-secondary-activeblue rounded-lg">
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
