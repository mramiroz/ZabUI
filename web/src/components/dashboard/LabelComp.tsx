import Link from "next/link";
import { Button} from "@zabui/comps";

export default function Label({component, onDelete}: {component: any, onDelete: any}){
  return(
    <div key={component._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{component.title}</h3>
          <p className="text-base text-gray-700">{component.category}</p>
        </div>
        <div className="flex space-x-2">
          <Button href={`/dashboard/components/${component._id}`} backColor="darkblue">
            Update
          </Button>
          <Button href={`/dashboard/components/${component._id}/props`} backColor="darkblue">
            Props
          </Button>
          <Button onClick={onDelete} backColor="red">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}