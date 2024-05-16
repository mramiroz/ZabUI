"use client";
import Image from "next/image";
import NavBar from "@/components/header/NavBar";
import SessionProfile from "@/components/header/SessionProfile";
import Aside from "@/components/categories/Aside";
import { useState } from "react";

export default function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMenuMouseEnter = () => {
    setIsAsideOpen(true);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleClick = () => {
    if (isAsideOpen) {
      setIsAsideOpen(false);
    }else{
      setIsAsideOpen(true);
    }
  }

  return (
  <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-gray-900">
    <div className="flex w-1/3">
      <Image src="/menu.svg" alt="menu" width={30} height={30} onMouseEnter={handleMenuMouseEnter} onClick={handleClick}
            className="mr-4 transition-transform duration-300 cursor-pointer hover:rotate-180" />
      <a href="/"><h1 className="mx-auto text-4xl font-bold">ZabUI</h1></a>
    </div>
    <NavBar />
    <SessionProfile />
    {isAsideOpen && <Aside isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>}
  </header>
  );
}