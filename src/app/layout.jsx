import { Hanken_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import TopProgressBar from "@/components/ui/TopProgressBar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const siteUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IOU Studio | Industrial Design and Product Development",
    template: "%s | IOU Studio",
  },
  description:
    "IOU Studio helps brands create meaningful products through industrial design, spatial design, 3D modeling, animation, and simulation.",
  keywords: [
    "IOU Studio",
    "industrial design",
    "product design",
    "3D modeling",
    "3D animation",
    "design studio Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "IOU Studio",
    title: "IOU Studio | Industrial Design and Product Development",
    description:
      "IOU Studio helps brands create meaningful products through industrial design, spatial design, 3D modeling, animation, and simulation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOU Studio | Industrial Design and Product Development",
    description:
      "IOU Studio helps brands create meaningful products through industrial design, spatial design, 3D modeling, animation, and simulation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="min-h-screen bg-[#F5F5F5] font-hanken">
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
