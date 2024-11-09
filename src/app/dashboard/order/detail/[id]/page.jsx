"use client";
import LoadingAnimation from "@/components/loading/LoadingAnimation";
import OrderDetailPageComponent from "@/components/pages/order/OrderDetailPageComponent";
import { handleFetchDetailOrderData } from "@/helpers/orderHelper";
import { useEffect, useState } from "react";

export default function OrderDetail({ params }) {
  const [currentData, setCurrentData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [isModalVerifyOpen, setModalVerifyOpen] = useState(false);

  const openModalVerify = async () => {
    setModalVerifyOpen(true);
  };

  const closeModalVerify = () => {
    setModalVerifyOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleFetchDetailOrderData(params.id);
      setTimeout(() => {
        setCurrentData(response);
        setOrderData(response);
      }, 2000);
    };

    fetchData();
  }, []);

  if (!orderData) {
    return (
      <div className="pt-28">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <>
      <OrderDetailPageComponent
        props={{
          orderData: orderData,
          orderId: params.id,
          openModalVerify: openModalVerify,
          isModalVerifyOpen: isModalVerifyOpen,
          closeModalVerify: closeModalVerify,
        }}
      />
    </>
  );
}
