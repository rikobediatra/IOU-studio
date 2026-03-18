import { LoadingProvider } from "@/context/LoadingContext";
import LoadingOverlayWrapper from "@/components/ui/loadingCircularWrapper";

export default function RootLayout({ children }) {
  return (
    <LoadingProvider>
      <LoadingOverlayWrapper />
      {children}
    </LoadingProvider>
  );
}
