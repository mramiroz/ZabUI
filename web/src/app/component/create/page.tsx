"use client";
import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!title || !description || !code || !link || !category) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const res = await fetch('/api/components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, code, link, category }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      alert('Component created successfully');
    } catch (err) {
      console.error(err);
      alert('An error occurred while creating the component');
    }
  };

  return (
    <form className="w-full max-w-lg mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-gray" htmlFor="title">
            Title
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-gray" htmlFor="description">
            Description
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-gray" htmlFor="code">
            Code
          </label>
          <textarea
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            id="code"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-gray" htmlFor="link">
            Link
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray -200 focus:outline-none focus:bg-white"
            id="link"
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-gray" htmlFor="category">
            Category
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;