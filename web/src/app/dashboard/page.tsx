"use client";
import { Button } from "@zabui/comps"
import { useSession } from "next-auth/react";

export default function Dashboard(){
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center py-2 my-10">
      <h1 className="mb-4 text-4xl">Welcome to the Dashboard, {(session?.user as any)?.name}</h1>
      <div className="flex flex-wrap justify-around max-w-4xl">
        <div className="flex flex-col items-center p-10 m-4 border-2 rounded-xl bg-cyan-950">
          <Button href="/dashboard/components" backColor="#1F2F71">
            Manage Components
          </Button>
          <p className="mt-2 font-bold text-center">Create, update, and delete components.</p>
        </div>
        <div className="flex flex-col items-center p-10 m-4 border-2 rounded-xl bg-cyan-950">
          <Button href="/dashboard/users" backColor="#1F2F71">
            Manage Users
          </Button>
          <p className="mt-2 font-bold text-center">Add, remove, and edit users.</p>
        </div>
        <div className="flex flex-col items-center p-10 m-4 border-2 rounded-xl bg-cyan-950">
          <Button href="/dashboard/props" backColor="#1F2F71">
            Manage Props
          </Button>
          <p className="mt-2 font-bold text-center">Create, update, and delete props.</p>
        </div>

      </div>
    </div>
  )
}