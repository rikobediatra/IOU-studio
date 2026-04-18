import "../globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LoadingOverlayWrapper from "@/components/ui/loadingCircularWrapper";

import { LoadingProvider } from "@/context/LoadingContext";

export default function RootLayout({ children }) {
  return (
    <>
      <LoadingProvider>
        <LoadingOverlayWrapper />
        <Navbar />
        {children}
        <Footer />
      </LoadingProvider>
    </>
  );
}
