import {Button} from "@zabui/comps";
import updateCompProps from "@/actions/Props/updateCompProp";
import { useEffect, useState } from "react";

export default function Label({prop, onDelete}: {prop: any, onDelete: any}){
  const [value, setValue] = useState(prop.value);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setValue(prop.value);
  }, [prop.value]);

  const update = async () => {
    try {
      await updateCompProps({id: prop.relationId, value: value});
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
    catch (error : any) {
      setError(error.message);
    }
  }
  return(
    <div key={prop._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2 flex-col md:flex-row">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">{prop.name}</h3>
          <p className="text-base text-gray-200">{prop.description}</p>
        </div>
        <div className="flex space-x-2 flex-wrap">
          {prop.required && prop.type === 'string' && (<input type="text" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={value} onChange={e => setValue(e.target.value)}/>)}
          {prop.required && prop.type === 'number' && (<input type="number" className="p-2 text-black border rounded-md mb-4 md:mb-0" value={value} onChange={e => setValue(e.target.value)}/>)}
          {prop.required && prop.type === 'boolean' && (<input type="checkbox" className="p-2 text-black border rounded-md mb-4 md:mb-0" checked={value} onChange={e => setValue(e.target.checked)}/>)}
          <Button onClick={update} backColor="darkblue">
            Update
          </Button>
          <Button onClick={onDelete} backColor="red">
            Delete
          </Button>
          {error && <p className="p-2 text-center text-red-500 bg-red-100 rounded">{error}</p>}
          {success && <p className="p-2 text-center text-green-500 bg-green-100 rounded">Prop updated successfully</p>}
        </div>
      </div>
    </div>
  )
}