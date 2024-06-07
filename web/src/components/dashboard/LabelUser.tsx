import { Button } from "@zabui/comps";  

export default function Label({user, onDelete}: {user: any, onDelete: any}){
  const id = user._id.toString();
  return(
    <div key={user._id} className="flex flex-col mb-4 border rounded-lg">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-base text-gray-700">{user.role}</p>
        </div>
        <div className="flex space-x-2">
            <Button href={`/dashboard/users/${id}`} backColor="darkblue">
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