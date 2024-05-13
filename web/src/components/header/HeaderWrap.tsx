"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import { Analytics } from "@vercel/analytics/react";

export default function HeaderWrap( {children}: Readonly<{children: React.ReactNode}>){

    return (
      <>
        <Header />
        <main className="flex flex-grow">
            <div className="w-full my-24 md:mx-32">{children}<Analytics/></div>
        </main>
      </>
    );
}