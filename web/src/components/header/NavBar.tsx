import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { LinkButton, Button } from "@zabui/comps";

interface UserWithRole extends User {
  role?: string;
}

interface NavBarProps {
  setShowCategories: (show: boolean) => void;
  showCategories: boolean;
}

export default function NavBar({ setShowCategories, showCategories }: NavBarProps) {
  const { data: session } = useSession();
  const user = session?.user as UserWithRole;
  return (
    <nav className="justify-center hidden w-1/3 sm:flex">
      <LinkButton href="/" text="Home" color="white" />
      <LinkButton href="/component" text="Components" color="white" />
      <LinkButton onClick={() => setShowCategories(!showCategories)} text="Categories" color="white" />
      {user?.role === "admin" && <LinkButton href="/dashboard" text="Dashboard" color="white" />}
    </nav>
  );
}