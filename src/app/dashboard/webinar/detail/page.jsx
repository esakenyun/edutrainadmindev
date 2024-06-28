"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WebinarRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/webinar");
  }, []);

  return null;
}
