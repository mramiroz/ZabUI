"use client";
import Image from "next/image";
import NavBar from "@/components/header/NavBar";
import SessionProfile from "@/components/header/SessionProfile";

export default function Header({ isAsideOpen, setIsAsideOpen }: { isAsideOpen: boolean, setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
  <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-gray-900">
    <div className="flex w-1/3">
      <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleMenuClick} className="mr-4 cursor-pointer" />
      <a href="/"><h1 className="mx-auto text-4xl font-bold">CompUI</h1></a>
    </div>
    <NavBar />
    <SessionProfile />
  </header>
  );
}