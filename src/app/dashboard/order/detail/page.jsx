"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OrderRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/order");
  }, []);

  return null;
}
