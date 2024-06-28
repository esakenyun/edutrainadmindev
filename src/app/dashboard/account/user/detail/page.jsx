"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserAccountRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/account/user");
  }, []);

  return null;
}
