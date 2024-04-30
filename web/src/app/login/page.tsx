"use client";
import React, { FormEvent } from 'react';
import { useState } from 'react';
import {signIn, useSession} from 'next-auth/react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await signIn('credentials', {
            redirect: false,
            username: username,
            password: password
        });
        if (res?.error) {
            console.error('An unexpected error happened:', res.error);
        }
        else{
            window.location.href = '/';
        }
    }
    return (
        <div className="flex items-center justify-center m-20">
          <div className="p-10 text-center bg-gray-900 rounded">
            <h1 className="mb-4 text-3xl font-bold">Login</h1>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <input className="p-2 my-2 text-black border border-gray-300 rounded" type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
              <input className="p-2 mb-5 text-black border border-gray-300 rounded" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <button className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">
                Login
              </button>
            </form>
            <p className="mt-2">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
          </div>
        </div>
    )
}