"use client";
import { useState } from "react";
import { signIn, useSession , signOut} from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [username, setUsername] = useState("");
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
                body: JSON.stringify({username, email, password})
            });
            if(res.ok){
                const user = await res.json();
                if (session) await signOut({redirect: false});
                await signIn("credentials", {
                    username: username,
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
        <div className="flex justify-center items-center m-20">
            <div className="text-center bg-gray-900 p-20 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <input className="mb-2 p-2 border border-gray-300 rounded text-black" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input className="mb-2 p-2 border border-gray-300 rounded text-black" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="mb-2 p-2 border border-gray-300 rounded text-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}