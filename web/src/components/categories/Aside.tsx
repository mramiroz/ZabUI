"use client";
import getCategories from '@/actions/Categories/getCategories';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

let cachedCategories: string[] | null = null;

export default function Aside({ isAsideOpen, setIsAsideOpen}: {isAsideOpen: boolean, setIsAsideOpen: (isOpen:boolean) => void}) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const { data: session } = useSession();
  
  useEffect(() => {
    const fetchData = async () => {
      if (!cachedCategories) {
        const res = await getCategories();
        cachedCategories = res;
      }
      setCategories(cachedCategories as string[]);
    }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsAsideOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    fetchData();
  }, [])

  return (
    <aside 
      className={`transition-all duration-200 ease-in-out order-first bg-gray-900 pr-4 w-3/5 md:w-2/5 lg:w-1/5 ${isAsideOpen ? 'open' : ''} fixed z-40 left-0 top-16`}>
      <ul className='m-5 space-y-4'>
        <Link href='/component' >
          <li className='p-2 mb-3 text-white bg-gray-800 border rounded-lg cursor-pointer hover:bg-gray-700'>
              Components
          </li>
        </Link>
        <li className='mb-3'>
          <div onClick={() => setIsAccordionOpen(!isAccordionOpen)} className='p-2 text-white bg-gray-800 border rounded-lg cursor-pointer hover:bg-gray-700'>
            Categories {isAccordionOpen ? '▼' : '▲'}
          </div>
          {isAccordionOpen && (
            <ul className='mt-2 space-y-2'>
              {categories.map((category, index) => {
                return (
                    <Link key={index} href={`/categories/${category}`}>
                      <li className='w-full p-2 m-4 text-white bg-gray-800 border rounded-lg cursor-pointer hover:bg-gray-700'>
                          {category}
                      </li>
                    </Link>
                )
              })}
            </ul>
          )}
        </li>
        {(session?.user as any)?.role === 'admin' && (
          <Link href='/dashboard'>
            <li className='p-2 text-white bg-gray-800 border rounded-lg cursor-pointer hover:bg-gray-700'>
              Dashboard
            </li>
          </Link>
        )}
      </ul>
    </aside>
  )
}