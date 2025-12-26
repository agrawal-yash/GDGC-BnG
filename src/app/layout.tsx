import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google AI | Build with Gemini",
  description: "Clone of Google AI website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] bg-[#0e0e0e]`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
