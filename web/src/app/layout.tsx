"use client";
import { Roboto } from "next/font/google";
import Header from "../components/header/header";
import "../styles/globals.css";
import Aside from "@/components/categories/aside";
import Footer from "@/components/footer/footer";
import { useState } from "react";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-800 text-white felx flex-col min-h-screen`}>
        <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
        <main className="flex-grow flex">
          <Aside isAsideOpen={isAsideOpen}/>
          <div className="flex-grow">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}