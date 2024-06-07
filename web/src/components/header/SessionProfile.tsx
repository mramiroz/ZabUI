"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@zabui/comps';
import { useState, useEffect } from 'react';

export default function SessionProfile() {
    const { data: session } = useSession();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 850);
      }
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
      <div className="flex items-center justify-end w-1/3">
      {session?.user ? (
        <>
          <p className={isSmallScreen ? 'hidden' : ''}> Welcome, {(session?.user as any)?.name}!</p> 
          <Link href={`/profile`}>
            <Image src="/user-icon.svg" alt="profile" width={40} height={40}  className='ml-2 border-2 rounded-full'/>
          </Link>
        </>
      ) : (
        <Button width="4" height="4" href="/login">Login</Button>
      )}
      </div>
    );
}
