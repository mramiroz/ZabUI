import { Button } from '@zabui/comps';

export default function Label({prop, onDelete}: {prop: any, onDelete: any}){
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-200">{prop.description}</p>
        </div>
        <div className="flex space-x-2">
          <Button href={`/dashboard/props/${prop._id}`} backColor="darkblue">
            Update
          </Button>
          <Button onClick={onDelete} backColor="red">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}