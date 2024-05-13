"use client";
import { Button } from "@zabui/comps"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard(){
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4 text-4xl">Welcome to the Dashboard, {(session?.user as any)?.name}</h1>
      <div className="flex flex-wrap justify-around max-w-4xl">
        <div className="flex flex-col items-center p-10 m-4 bg-gray-500 border rounded-xl">
          <Button href="/dashboard/components" backColor="#1F2F71">
            Manage Components
          </Button>
          <p className="mt-2 text-center">Create, update, and delete components.</p>
        </div>
        <div className="flex flex-col items-center p-10 m-4 bg-gray-500 border rounded-xl">
          <Button href="/dashboard/users" backColor="#1F2F71">
            Manage Users
          </Button>
          <p className="mt-2 text-center">Add, remove, and edit users.</p>
        </div>
      </div>
    </div>
  )
}