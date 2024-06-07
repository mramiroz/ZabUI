"use client";
import Image from "next/image";
import NavBar from "@/components/header/NavBar";
import SessionProfile from "@/components/header/SessionProfile";
import Aside from "@/components/categories/Aside";
import { useEffect, useState } from "react";
import CategoriesSubMenu from "./CategoriesSubMenu";

export default function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      }else{
        setIsSmallScreen(false);
      }
    }
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
  });

  const handleClick = () => {
    if (isAsideOpen) {
      setIsAsideOpen(false);
    }else{
      setIsAsideOpen(true);
    }
  }


  return (
    <>
      <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-gray-900">
        <div className="flex w-1/3">
            {isSmallScreen && (
              <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleClick}
                    className="mr-4 transition-transform duration-300 cursor-pointer hover:rotate-180" />
            )}
          <a href="/"><h1 className="mx-auto text-4xl font-bold">ZabUI</h1></a>
        </div>
        <NavBar setShowCategories={setShowCategories} showCategories={showCategories}/>
        <SessionProfile />
        {isAsideOpen && <Aside isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>}
      </header>
      {!isSmallScreen && (<CategoriesSubMenu show={showCategories} />)}
    </>
  );
}