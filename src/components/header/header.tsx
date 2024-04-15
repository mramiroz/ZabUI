import ButtonHeader from "./button-header";
import Image from "next/image";
import { Button, Profile } from "@compui/comps";

export default function Header({ isAsideOpen, setIsAsideOpen }: { isAsideOpen: boolean, setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const isAuthenticated = true;

  return (
    <header className="flex p-4 justify-between items-center">
      <div className="flex items-center">
        <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleMenuClick} className="cursor-pointer mr-4" />
        <h1 className="text-4xl font-bold mx-auto">CompUI</h1>
      </div>
      <nav className="flex list-none space-x-20 justify-end">
        <ButtonHeader text="Home" href="/" />
      </nav>
      {isAuthenticated ? (
        <Profile image="/profile.jpg" width={60} height={60} />
      ) : (
        <ButtonHeader text="Login" href="/login" />
      )}
      <Button text="Sign Up" href="/signup" color="blue" width="4" height="4"/>
    </header>
  );
}