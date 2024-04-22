"use client";
import React, { FormEvent } from 'react';
import { useState } from 'react';
import {signIn, useSession} from 'next-auth/react';

export default function Login() {
    //const [session, loading] = useSession();
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
        <div className="flex justify-center items-center m-20">
          <div className="text-center bg-gray-900 p-10 rounded">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <input className="my-2 p-2 border border-gray-300 rounded text-black" type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
              <input className="mb-5 p-2 border border-gray-300 rounded text-black" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded" type="submit">
                Login
              </button>
            </form>
            <p className="mt-2">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
          </div>
        </div>
    )
}