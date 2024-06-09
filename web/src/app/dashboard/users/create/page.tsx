"use client";
import InputForm from '@/components/forms/InputForm';
import createUser from '@/actions/Users/createUser';
import { Button } from '@zabui/comps';
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
    <div className="flex justify-center">
    <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
      <h1 className="mb-4 text-xl font-bold text-center">Create User</h1>
      {success && <p className="p-2 text-center text-green-500 bg-green-100 rounded">Component created successfully</p>}
      {error && <p className="p-2 text-center text-red-500 bg-red-100 rounded">Error creating component</p>}
      <form action={handleSubmit} className="space-y-4">
        <InputForm label="Name" type="text" name="name" placeholder="Name" required={true}/>
        <InputForm label="Email" type="email" name="email" placeholder="Email" required={true}/>
        <InputForm label="Password" type="password" name="password" placeholder="Password" required={true}/>
        <select name="role" className="px-4 py-2 text-white bg-gray-900 rounded block">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="flex justify-end">
          <Button type="submit">Create User</Button>
        </div>
      </form>
    </div>
  </div>
  )
}