import { handleVerifyOrder } from "@/helpers/orderHelper";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";
const getEventTypeName = (eventType) => {
  switch (eventType) {
    case "WEBINAR":
      return "Webinar";
    case "WORKSHOP":
      return "Workshop";
    case "TRAINING":
      return "Training";
    default:
      return eventType;
  }
};

const getEventPrice = (orderData) => {
  if (!orderData || !orderData.event) return "0";

  switch (orderData.eventType) {
    case "WEBINAR":
      return orderData.event.lastWebinarHistory?.price || "0";
    case "WORKSHOP":
      return orderData.event.lastWorkshopHistory?.price || "0";
    case "TRAINING":
      return orderData.event.lastTrainingHistory?.price || "0";
    default:
      return "0";
  }
};

export default function OrderVerificationModal({ isOpen, onClose, orderData }) {
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    const response = await handleVerifyOrder(orderData.id);
    setLoading(false);
    if (response.status === 200) {
      toast.success("Order Verification Successfully");
      window.location.reload();
    } else if (response.error) {
      toast.error(response.error);
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 text-primary-white bg-primary-blue rounded-lg shadow-md active:border-none">
        <h2 className="text-xl font-bold mb-4">Verifikasi Order</h2>
        <p className="font-bold">No Invoice: </p>
        <p>{orderData.id}</p>
        <p className="font-bold">Pelanggan :</p>
        <p> {orderData.account.fullname}</p>
        <p> {orderData.account.phone}</p>
        <p className="font-bold">
          <span>Event {getEventTypeName(orderData.eventType)} </span>
        </p>
        <p> {orderData.event.title}</p>
        <p>Rp {getEventPrice(orderData)}</p>
        <div className="flex justify-end">
          <Button onClick={handleVerify} variant="contained" color="success" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Verifikasi"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
