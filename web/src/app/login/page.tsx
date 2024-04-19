"use client";
import React from 'react';

export default function Login() {
    return (
        <div className="flex justify-center items-center m-20">
            <div className="text-center bg-gray-900 p-4 rounded">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <form className="flex flex-col items-center">
                    <input className="mb-2 p-2 border border-gray-300 rounded" type="text" placeholder="Username" />
                    <input className="mb-2 p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </form>
                <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
            </div>
        </div>
    );
}