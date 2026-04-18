import { LoadingProvider } from "@/context/LoadingContext";
import { NotificationProvider } from "@/context/NotificationContext";
import LoadingOverlayWrapper from "@/components/ui/loadingCircularWrapper";
import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout({ children }) {
  return (
    <LoadingProvider>
      <NotificationProvider>
        <LoadingOverlayWrapper />
        <Toaster position="bottom-right" richColor/>
        {children}
      </NotificationProvider>
    </LoadingProvider>
  );
}
