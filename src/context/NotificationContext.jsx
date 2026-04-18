"use client";

import React, { createContext, useContext } from "react";
import { toast } from "sonner";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  // Fungsi untuk menampilkan error
  const notifyError = (message, description = "") => {
    toast.warning(message, {
      description: description,
      style: {
        "--normal-bg":
          "color-mix(in oklab, var(--destructive) 10%, var(--background))",
        "--normal-text": "var(--destructive)",
        "--normal-border": "var(--destructive)",
      },
    });
  };

  // Fungsi untuk menampilkan success
  const notifySuccess = (message, description = "") => {
    toast.success(message, {
      description: description,
    });
  };

  return (
    <NotificationContext.Provider value={{ notifyError, notifySuccess }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification harus digunakan di dalam NotificationProvider",
    );
  }
  return context;
};
