"use client";
import { useState } from "react";
import { signIn, useSession , signOut} from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, password})
            });
            if(res.ok){
                const user = await res.json();
                if (session) await signOut({redirect: false});
                await signIn("credentials", {
                    name: name,
                    password: password,
                    redirect: false
                });
                router.push("/");
            }
        } catch(error: any){
            console.error("An unexpected error happened:", error);
        }
    }
    return (
        <div className="flex items-center justify-center m-20">
            <div className="p-20 text-center bg-gray-900 rounded-lg">
                <h1 className="mb-4 text-3xl font-bold">Register</h1>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <input className="p-2 mb-2 text-black border border-gray-300 rounded" type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
                    <input className="p-2 mb-2 text-black border border-gray-300 rounded" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="p-2 mb-2 text-black border border-gray-300 rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}