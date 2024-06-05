import Link from "next/link";

export default function Label({prop}: {prop: any}){
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-700">{prop.description}</p>
        </div>
        <div className="flex space-x-2">
          {prop.type === 'string' && (<input type="text" className="p-2 text-black border rounded-md" value={prop.value}/>)}
          {prop.type === 'number' && (<input type="number" className="p-2 text-black border rounded-md" value={prop.value} />)}
          {prop.type === 'boolean' && (<input type="checkbox" className="p-2 text-black border rounded-md" value={prop.value} />)}
        </div>
      </div>
    </div>
  )
}