"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../../services/LoginService";

export default function AutoLogout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Set timer 5 menit (300.000 ms)
    const timeoutDuration = 5 * 60 * 1000;

    const timer = setTimeout(async () => {
      await logout();
      router.push("/admin");
      router.refresh();
    }, timeoutDuration);
    return () => clearTimeout(timer);
  }, [router]);

  return <>{children}</>;
}
