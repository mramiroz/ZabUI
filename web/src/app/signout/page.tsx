"use client";
import { useSession, signOut } from "next-auth/react";


export default function SignOut() {
    const { data: session } = useSession();
    if (session)
        return (
            <div className="flex justify-center items-center m-20">
                <div className="text-center bg-gray-900 p-10 rounded">
                    <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded" onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            </div>
        )
    else
        return (
            <div className="flex justify-center items-center m-20">
                <div className="text-center bg-gray-900 p-10 rounded">
                    <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
                    <p>You are not signed in</p>
                </div>
            </div>
        )
}