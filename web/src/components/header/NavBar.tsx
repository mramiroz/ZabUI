"use client";
import { RndButton } from '@compui/comps';

export default function NavBar() {
  return (
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
  );
}