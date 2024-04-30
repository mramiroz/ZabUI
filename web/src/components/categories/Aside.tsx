"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Aside({ isAsideOpen }: { isAsideOpen: boolean }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <aside className={`order-first bg-gray-900 w-3/5 md:w-1/5 h-screen ${isAsideOpen ? 'open' : ''} fixed z-10`}>
      <ul className='m-5 space-y-2'>
        {categories.map((category, index) => (
            <Link key={index} href={`/categories/${category}`}>
              <li className='p-2 bg-gray-700 hover:bg-gray-600'>{category}</li>
            </Link>
        ))}
      </ul>
    </aside>
  )
}
