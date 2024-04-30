"use client";
import Component from '@/models/Component';
import { useState } from 'react';

export default function CreateComponent() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    props: {},
    import: '',
    code: '',
    component: '',
    likes: 0
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePropsChange = (e: any) => {
    setForm({ ...form, props: JSON.parse(e.target.value) });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try{
      const res = fetch('/api/components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
    } catch (error){
      console.error(error);
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen py-2">
  <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
    <h1 className="mb-4 text-xl font-bold text-center">Create Component</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-sm font-bold">Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold ">Description:</label>
        <input type="text" name="description" value={form.description} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold">Category:</label>
        <input type="text" name="category" value={form.category} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold">Props:</label>
        <input type="text" name="props" onChange={handlePropsChange} placeholder='{"key":"value"}' required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold">Import:</label>
        <input type="text" name="import" value={form.import} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold">Code:</label>
        <textarea name="code" value={form.code} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-bold">Component:</label>
        <input type="text" name="component" value={form.component} onChange={handleChange} required className="p-2 text-black border rounded-md" />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Create</button>
    </form>
  </div>
</div>
  );
}