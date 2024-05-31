"use client";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { LinkButton } from "@zabui/comps";
interface UserWithRole extends User {
  role?: string;
}

export default function NavBar() {
  const { data: session } = useSession();
  const user = session?.user as UserWithRole;
  return (
    <nav className="justify-center hidden w-1/3 sm:flex">
      <LinkButton href="/" text="Home" color="white"/>
      <LinkButton href="/docs" text="Docs" color="white" />
      <LinkButton href="/component" text="Components" color="white" />
      {user?.role === "admin" && <LinkButton href="/dashboard" text="Dashboard" color="white" />}
    </nav>
  );
}