import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { mainMeta } from "@/metadata/metadata";
import { Toaster } from "sonner";

import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import AuthContext from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // set a CSS variable
});

export const metadata: Metadata = mainMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
      >
        <Toaster />
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
