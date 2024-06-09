import {Button} from "@zabui/comps";
import updateCompProps from "@/actions/Props/updateCompProp";
import { useEffect, useState } from "react";

export default function Label({prop, onDelete}: {prop: any, onDelete: any}){
  const [value, setValue] = useState(prop.value);
  useEffect(() => {
    setValue(prop.value);
  }, [prop.value]);

  const update = async () => {
    await updateCompProps({id: prop._id, value: value, componentId: prop.component, propId: prop.prop});
  }
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2 flex-col md:flex-row">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-200">{prop.description}</p>
        </div>
        <div className="flex space-x-2 flex-wrap">
          {prop.type === 'string' && (<input type="text" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={value} onChange={e => setValue(e.target.value)}/>)}
          {prop.type === 'number' && (<input type="number" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={value} onChange={e => setValue(e.target.value)}/>)}
          {prop.type === 'boolean' && (<input type="checkbox" className="p-2 text-black border rounded-md mb-4 md:mb-0" checked={value} onChange={e => setValue(e.target.checked)}/>)}
          <Button onClick={update} backColor="darkblue">
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