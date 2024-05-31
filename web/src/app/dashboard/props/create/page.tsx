import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";

export default function createProp(){
  const createProp = async (formData: FormData) => {
    "use server";
    await connectToDatabase();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    const required = formData.get("required") as string;
    
    const prop = await Props.create({name, description, type, required});
  }
  return (
    <div className="flex justify-center">
      <form action={createProp} className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
        <label className="text-sm font-bold">Name:</label>
        <input type="text" id="name" name="name" className="p-2 text-black border rounded-md" />
        <label className="text-sm font-bold">Description:</label>
        <input type="text" id="description" name="description" className="p-2 text-black border rounded-md" />
        <label className="text-sm font-bold">Type:</label>
        <select name="type" className="p-2 text-black border rounded-md">
          <option value="string">string</option>
          <option value="number">number</option>
          <option value="boolean">boolean</option>
        </select>
        <label className="text-sm font-bold">Input:</label>
        <select name="input" className="p-2 text-black border rounded-md">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button className="p-2 text-white bg-blue-500 rounded-md">Create Prop</button>
      </form>
    </div>
  )
}