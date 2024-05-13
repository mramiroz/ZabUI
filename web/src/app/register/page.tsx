"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import registerUser from "@/actions/Users/registerUser";
import { Metadata } from "next";

export default function Register() {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const response = await registerUser({ name, email, password });
        if (response.error) {
            setError(response.error);
            setSuccess(null);
        } else {
            setError(null);
            setSuccess("User registered successfully. Please sign in.");
            await signIn("credentials", { redirect: false, name, password });
        }
    };

    return (
        <div className="flex items-center justify-center m-20">
            <div className="p-20 text-center bg-gray-900 rounded-lg">
                <h1 className="mb-4 text-3xl font-bold">Register</h1>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                {success && <p className="mb-4 text-green-500">{success}</p>}
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <input name="name" className="p-2 mb-2 text-black border border-gray-300 rounded" type="text" placeholder="Username" autoComplete="off" required />
                    <input name="email" className="p-2 mb-2 text-black border border-gray-300 rounded" type="email" placeholder="Email" autoComplete="off" required />
                    <input name="password" className="p-2 mb-2 text-black border border-gray-300 rounded" type="password" placeholder="Password" autoComplete="off" required />
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
