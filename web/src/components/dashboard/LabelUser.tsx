import Link from "next/link";
import deleteUser from "@/actions/Users/deleteUser";

export default function Label({user}: {user: any}){
  return(
    <div key={user._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-base text-gray-700">{user.role}</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => deleteUser(user._id.toString())} className="p-2 text-white bg-red-500 rounded-lg">
            Delete
          </button>
          <button className="p-2 text-white bg-blue-500 rounded-lg">
            <Link href={`/dashboard/users/${user._id}`}>Update</Link>
          </button>
        </div>
      </div>
    </div>
  )
}