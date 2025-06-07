import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Water Business College",
  description: "Created by 360Inc",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // or others as needed
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
