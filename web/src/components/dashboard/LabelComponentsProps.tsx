import {Button} from "@zabui/comps";
export default function Label({prop, onDelete}: {prop: any, onDelete: any}){
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2 flex-col md:flex-row">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-700">{prop.description}</p>
        </div>
        <div className="flex space-x-2 flex-wrap">
          {prop.type === 'string' && (<input type="text" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={prop.value}/>)}
          {prop.type === 'number' && (<input type="number" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={prop.value} />)}
          {prop.type === 'boolean' && (<input type="checkbox" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={prop.value} />)}
          <Button onClick={onDelete} backColor="red">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}