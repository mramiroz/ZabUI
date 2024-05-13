"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@zabui/comps';

export default function SessionProfile() {
    const { data: session } = useSession();
    return (
      <div className="flex items-center justify-end w-1/3">
      {session?.user ? (
        <>
          <p className='hidden sm:block'> Welcome, {(session?.user as any)?.name}!</p>   
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
