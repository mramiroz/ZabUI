"use client";
import { Analytics } from "@vercel/analytics/react"
import { Roboto } from "next/font/google";
import Header from "../components/header/header";
import "../styles/globals.css";
import Aside from "@/components/categories/aside";
import Footer from "@/components/footer/footer";
import { useState } from "react";
import { useSession , SessionProvider } from "next-auth/react";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CompUI</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <SessionProvider>
      <body className={`${roboto.className} bg-gray-800 text-white flex flex-col min-h-screen`}>
        <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
        <main className="flex-grow flex mx-2 md:mx-32 md:my-10">
          <Aside isAsideOpen={isAsideOpen}/>
          <div className="w-full">{children}<Analytics/></div>
        </main>
        <Footer />
      </body>
      </SessionProvider>
    </html>
  );
}