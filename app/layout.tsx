import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import LenisScroll from "../components/elements/LenisScroll";
import CustomCursor from "../components/elements/CustomCursor";
import ToggleBodyClass from "../components/elements/Togglebtn";
import FloatingContactButton from "../components/FloatingContactButton";

import "../public/assets/css/bootstrap.css";
import "../public/assets/css/style.css";
import "../public/assets/css/dark-mode.css";
import "..//public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Neeagle",
  description: "Neeagle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <LenisScroll />
        <CustomCursor />
        <ToggleBodyClass />
        <FloatingContactButton />
      </body>
    </html>
  );
}
