import Link from "next/link";

export default function Label({prop, onDelete}: {prop: any, onDelete: any}){
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-700">{prop.description}</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={onDelete} className="p-2 text-white bg-red-500 rounded-lg">
            Delete
          </button>
          <button className="p-2 text-white bg-blue-500 rounded-lg">
            <Link href={`/dashboard/props/${prop._id}`}>Update</Link>
          </button>
        </div>
      </div>
    </div>
  )
}