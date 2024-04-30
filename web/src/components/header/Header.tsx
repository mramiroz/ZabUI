"use client";
import Image from "next/image";
import { Button, RndButton} from "@compui/comps";
import {useMediaQuery} from "react-responsive";
import { useSession } from "next-auth/react";
import Link from "next/link";

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
        <RndButton href="/" backColor="#1F2F71">
          Home
        </RndButton>
        <RndButton href="/docs" backColor="#1F2F71">
          Docs
        </RndButton>
        <RndButton href="/component" backColor="#1F2F71">
          Components
        </RndButton>
      </nav>
    )}
    <div className="flex items-center justify-end w-1/3">
      {session ? (
        <>
          {!isMobile ? (<p> Welcome, {(session?.user as any)?.username}!</p>): null}    
          <Link href={`/profile`}>
            <Image src="/user-icon.svg" alt="user" width={40} height={40} className="ml-2 border-2 rounded-full cursor-pointer"/>
          </Link>
        </>
      ) : (
        <Button width="4" height="4" href="/login">
          Login
        </Button>
      )}
    </div>
  </header>
  );
}