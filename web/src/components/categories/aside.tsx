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
    <aside className={`order-first bg-gray-900 w-1/5 h-screen ${isAsideOpen ? 'open' : ''}`}>
      <ul className='space-y-2 m-5'>
        {categories.map((category, index) => (
            <Link key={index} href={`/categories/${category}`}>
              <li className='bg-gray-700 p-2 hover:bg-gray-600'>{category}</li>
            </Link>
        ))}
      </ul>
    </aside>
  )
}
