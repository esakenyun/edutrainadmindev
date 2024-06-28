"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WorkshopRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/workshop");
  }, []);

  return null;
}
