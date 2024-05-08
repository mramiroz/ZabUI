"use client";
import { RndButton } from '@compui/comps';
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {
  return (
    <>
        <nav className="justify-center hidden w-1/3 sm:flex">
          <RndButton href="/" backColor="#1F2F71">
            Home
          </RndButton>
          <RndButton href="/component" backColor="#1F2F71">
            Components
          </RndButton>
        </nav>
    </>
  );
}