"use client";
import { Button } from "@zabui/comps"
import { useSession } from "next-auth/react";

export default function Dashboard(){
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center py-2 my-10">
      <h1 className="mb-4 text-4xl">Welcome to the Dashboard, {(session?.user as any)?.name}</h1>
      <div className="flex flex-wrap justify-around max-w-4xl">
        <div className="flex flex-col items-center p-10 m-4 shadow-2xl rounded-2xl">
          <Button href="/dashboard/components" backColor="#063970">
            Manage Components
          </Button>
          <p className="mt-2 font-bold text-center">Create, update, and delete components.</p>
        </div>
        <div className="flex flex-col items-center p-10 m-4 shadow-2xl rounded-2xl">
          <Button href="/dashboard/users" backColor="#063970">
            Manage Users
          </Button>
          <p className="mt-2 font-bold text-center">Add, remove, and edit users.</p>
        </div>
        <div className="flex flex-col items-center p-10 m-4 shadow-2xl rounded-2xl">
          <Button href="/dashboard/props" backColor="#063970">
            Manage Props
          </Button>
          <p className="mt-2 font-bold text-center">Create, update, and delete props.</p>
        </div>

      </div>
    </div>
  )
}