"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@compui/comps';
import { useMediaQuery } from 'react-responsive';

export default function SessionProfile() {
    const { data: session } = useSession();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
      <div className="flex items-center justify-end w-1/3">
      {session ? (
        <>
          {!isMobile ? (<p> Welcome, {(session?.user as any)?.name}!</p>): null}    
          <Link href={`/profile`}>
            <Image src="/user-icon.svg" alt="user" width={40} height={40} className="ml-2 border-2 rounded-full cursor-pointer"/>
          </Link>
        </>
      ) : (
        <Button width="4" height="4" href="/login">Login</Button>
      )}
      </div>
    );
}
