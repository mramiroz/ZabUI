import ButtonHeader from "./button-header";
import Image from "next/image";
import { Button, Profile } from "@compui/comps";

export default function Header({ isAsideOpen, setIsAsideOpen }: { isAsideOpen: boolean, setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const isAuthenticated = true;

  return (
  <header className="flex justify-between p-4 items-center">
    <div className="flex w-1/3">
      <Image src="/menu.svg" alt="menu" width={30} height={30} onClick={handleMenuClick} className="cursor-pointer mr-4" />
      <a href="/"><h1 className="text-4xl font-bold mx-auto">CompUI</h1></a>
    </div>
    <nav className="flex justify-center w-1/3">
      <Button text="Components" href="/component" backColor="black" borderColor="white" />
    </nav>
    <div className="w-1/3 flex justify-end">
      {isAuthenticated ? (
        <Profile image="/profile.jpg" width={60} height={60} color="purple" />
      ) : (
        <ButtonHeader text="Login" href="/login" />
      )}
    </div>
  </header>
  );
}