import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { Box, Modal } from "@mui/material";

const FailedModal = ({ open, onClose, title, description }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[450px] py-3 px-8 bg-red-500 shadow-md rounded-3xl">
        <div className="flex justify-end">
          <RxCross2 onClick={onClose} className="text-4xl text-[#BDBDBD] cursor-pointer" />
        </div>
        <div className="text-primary-white">
          <div className="flex flex-col items-center justify-center gap-3">
            <RxCrossCircled className="text-7xl" />
            <h1 className="text-xs md:text-xl font-bold text-center">{title}</h1>
            <h1 className="text-xs md:text-sm">{description}</h1>
            <div className="pb-5"></div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default FailedModal;
