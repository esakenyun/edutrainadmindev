"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function JobRoleRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/jobrole");
  }, []);

  return null;
}
