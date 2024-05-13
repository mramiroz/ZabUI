"use client";
import getCategories from '@/actions/Categories/getCategories';
import Link from 'next/link';
import { useState, useEffect } from 'react';

let cachedCategories: string[] | null = null;

export default function Aside({ isAsideOpen}: { isAsideOpen: boolean}) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!cachedCategories) {
        const res = await getCategories();
        cachedCategories = res;
      }
      setCategories(cachedCategories as string[]);
    }
    fetchData();
  }, [])

  return (
    <aside className={`order-first bg-gray-900 pr-4 w-3/5 md:w-2/5 lg:w-1/5 ${isAsideOpen ? 'open' : ''} fixed bg-opacity-55 z-40 top-16 sm:top-24 left-0`}>
      <ul className='m-5'>
        <li className='mb-3'>
          <div onClick={() => setIsAccordionOpen(!isAccordionOpen)} className='p-2 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800'>
            Categories {isAccordionOpen ? '▼' : '▲'}
          </div>
          {isAccordionOpen && (
            <ul>
              {categories.map((category, index) => {
                return (
                    <Link key={index} href={`/categories/${category}`}>
                      <li className='w-full p-2 m-4 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800'>
                          {category}
                      </li>
                    </Link>
                )
              })}
            </ul>
          )}
        </li>
          <Link href='/component' >
            <li className='p-2 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800'>
                Components
            </li>
          </Link>
      </ul>
    </aside>
  )
}