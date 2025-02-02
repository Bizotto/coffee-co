import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee & Co",
  description: "Connections with coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-7xl mx-auto bg-stone-300 antialiased leading-relaxed space-y-12 ${inter.className}`}
      >
        <Header />
        <div className="bg-stone-800/30 h-[0.5px]" />
        {children}
      </body>
    </html>
  );
}
