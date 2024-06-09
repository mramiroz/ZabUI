"use client";
import InputForm from '@/components/forms/InputForm';
import createComponent from '@/actions/Comps/createComponent';
import { useState } from 'react';
import { Button } from '@zabui/comps';

export default function Create() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const handleSubmit = async (FormData: FormData) => {
    const title = FormData.get('title') as string;
    const description = FormData.get('description') as string;
    const category = FormData.get('category') as string;
    const code = FormData.get('code') as string;
    const component = FormData.get('component') as string;
    const importValue = FormData.get('import') as string;
    const res = await createComponent({title, description, category, importValue: importValue, code, component});
    if (res) {
      setSuccess('Component created');
    } else {
      setError('Error creating component');
    }
    setTimeout(() => {window.location.href = '/dashboard/components';}, 1500);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
        <h1 className="mb-4 text-xl font-bold text-center">Create Component</h1>
        {error && <p className="p-2 text-white bg-red-500 rounded-md">{error}</p>}
        {success && <p className="p-2 text-white bg-green-500 rounded-md">{success}</p>}
        <form action={handleSubmit} className="space-y-4">
          <InputForm label="Title" type="text" name="title" placeholder="Title" required={true}/>
          <InputForm label="Description" type="text" name="description" placeholder="Description" required={true}/>
          <InputForm label="Category" type="text" name="category" placeholder="Category" required={true}/>
          <InputForm label="Import" type="text" name="import" placeholder="Import" required={true}/>
          <InputForm label="Code" type="text" name="code" placeholder="Code" required={true}/>
          <InputForm label="Component" type="text" name="component" placeholder="Component" required={true}/>
          <div className="flex justify-end">
            <Button type="submit">Create Component</Button>
          </div>
        </form>
      </div>
    </div>
  );
}