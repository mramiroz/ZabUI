"use client";
import Image from "next/image";
import { Button, RndButton} from "@compui/comps";
import {useMediaQuery} from "react-responsive";
import { useSession } from "next-auth/react";

export default function Header({ isAsideOpen, setIsAsideOpen }: { isAsideOpen: boolean, setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { data: session, status } = useSession();

  return (
  <header className="flex items-center justify-between p-4">
    <div className="flex w-1/3">
      <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleMenuClick} className="mr-4 cursor-pointer" />
      <a href="/"><h1 className="mx-auto text-4xl font-bold">CompUI</h1></a>
    </div>
    {isMobile ? null : (
      <nav className="flex justify-center w-1/3 ">
        <RndButton href="/components" backColor="#1F2F71">
          Components
        </RndButton>
      </nav>
    )}
    <div className="flex justify-end w-1/3">
      {status === "authenticated" ? (
        <p><a href="/profile" className="hover:underline">{(session?.user as any)?.username}</a></p>
      ) : (
        <Button width="4" height="4" href="/login">
          Login
        </Button>
        
      )}
    </div>
  </header>
  );
}