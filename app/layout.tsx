import type { Metadata } from "next";
import { Geist, Instrument_Sans } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex — Parts that fit. Upgrades that last.",
  description:
    "Premium car audio, accessories & upgrades for your ride. Trusted parts, reliable quality, and expert support.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrumentSans.variable} font-geist antialiased`}>
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
