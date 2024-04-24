"use client";
import Image from "next/image";
import { Button, Profile } from "@compui/comps";
import {useMediaQuery} from "react-responsive";
import { useSession } from "next-auth/react";

export default function Header({ isAsideOpen, setIsAsideOpen }: { isAsideOpen: boolean, setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { data: session, status } = useSession();

  return (
  <header className="flex justify-between p-4 items-center">
    <div className="flex w-1/3">
      <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleMenuClick} className="cursor-pointer mr-4" />
      <a href="/"><h1 className="text-4xl font-bold mx-auto">CompUI</h1></a>
    </div>
    {isMobile ? null : (
      <nav className="flex justify-center w-1/3 ">
        <Button text="Components" href="/component" backColor="black" borderColor="white" />
      </nav>
    )}
    <div className="w-1/3 flex justify-end">
      {status === "authenticated" ? (
        <p><a href="/profile" className="hover:underline">{(session?.user as any)?.username}</a></p>
      ) : (
        <Button width="4" height="4" text="Login" href="/login" />
      )}
    </div>
  </header>
  );
}