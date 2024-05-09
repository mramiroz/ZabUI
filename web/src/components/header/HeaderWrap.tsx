"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Aside from "@/components/categories/Aside";
import { Analytics } from "@vercel/analytics/react";

export default function HeaderWrap( {children}: Readonly<{children: React.ReactNode}>){
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    return (
      <>
        <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
        <main className="flex flex-grow">
            <Aside  isAsideOpen={isAsideOpen}/>
            <div className="w-full my-24 md:mx-32">{children}<Analytics/></div>
        </main>
      </>
    );
}