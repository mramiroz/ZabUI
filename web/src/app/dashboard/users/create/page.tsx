"use client";
import InputForm from '@/components/forms/InputForm';
import createUser from '@/actions/Users/createUser';
import { useState } from 'react';


export default function Create(){
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (formData: FormData) => {
    setError(null);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;
    try {
      const res = await createUser({name, email, password, role});
      if(res){
        setSuccess(true);
        setTimeout(() => { window.location.href = "/dashboard/users" }, 3000);
      } else {
        setError("Error creating component");
      }
    } catch (error : any) {
      setError(error.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
      <h1 className="mb-4 text-xl font-bold text-center">Create Component</h1>
      {success && <p className="p-2 text-center text-green-500 bg-green-100 rounded">Component created successfully</p>}
      {error && <p className="p-2 text-center text-red-500 bg-red-100 rounded">Error creating component</p>}
      <form action={handleSubmit} className="space-y-4">
        <InputForm label="Name" type="text" name="name" placeholder="Name" required={true}/>
        <InputForm label="Email" type="email" name="email" placeholder="Email" required={true}/>
        <InputForm label="Password" type="password" name="password" placeholder="Password" required={true}/>
        <select name="role" className="px-4 py-2 text-white bg-gray-900 rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Create</button>
      </form>
    </div>
  </div>
  )
}