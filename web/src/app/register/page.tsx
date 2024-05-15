"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import registerUser from "@/actions/Users/registerUser";


export default function Register() {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<{[key: string]: string} | null>(null);
    
    const validate = (name: string, email: string, password: string) => {
        const errors: {[key: string]: string} = {};
        if (!name || name.length < 5) errors.name = "Username must be at least 5 characters long.";
        if (!email || !email.includes('@')) errors.email = "Email is invalid.";
        if (!password || password.length < 8) errors.password = "Password must be at least 8 characters long.";
        return errors;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const errors = validate(name, email, password);
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }
        const response = await registerUser({ name, email, password });
        if (response.error) {
            setError(response.error);
            setSuccess(null);
        } else {
            setError(null);
            setSuccess("User registered successfully. Please sign in.");
            await signIn("credentials", { redirect: false, name, password });
            setTimeout(() => {window.location.href = '/';}, 1500)
            
        }
    };

    return (
        <div className="flex items-center justify-center m-20">
            <div className="p-20 text-center bg-gray-900 rounded-2xl">
                <h1 className="mb-4 text-3xl font-bold">Register</h1>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                {success && <p className="mb-4 text-green-500">{success}</p>}
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    {validationErrors && validationErrors.name && <p className="mb-4 text-red-500">{validationErrors.name}</p>}
                    {validationErrors && validationErrors.email && <p className="mb-4 text-red-500">{validationErrors.email}</p>}
                    {validationErrors && validationErrors.password && <p className="mb-4 text-red-500">{validationErrors.password}</p>}
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
