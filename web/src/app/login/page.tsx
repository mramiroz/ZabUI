"use client";
import React, { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Metadata } from 'next';

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            name: name,
            password: password
        });
        if (res?.error) {
            setError((res as any)?.error);
        }
        else{
            window.location.href = '/';
        }
    }
    return (
        <div className="flex items-center justify-center m-20">
          <div className="p-10 text-center bg-gray-900 rounded">
            <h1 className="mb-4 text-3xl font-bold">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <input className="p-2 my-2 text-black border border-gray-300 rounded" type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
              <input className="p-2 mb-5 text-black border border-gray-300 rounded" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <button className="px-4 py-2 my-4 font-bold text-white bg-blue-700 rounded hover:bg-blue-900" type="submit">
                Login
              </button>
            </form>
            <p className="mt-2">Don't have an account? <a href="/register" className="text-blue-700">Register</a></p>
          </div>
        </div>
    )
}