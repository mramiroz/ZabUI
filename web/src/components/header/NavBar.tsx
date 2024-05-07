"use client";
import { RndButton } from '@compui/comps';
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
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
    </>
  );
}