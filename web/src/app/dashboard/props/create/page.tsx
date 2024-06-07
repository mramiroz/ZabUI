"use client";
import createProp from "@/actions/Props/createProp";
import { useState } from "react";

export default function create(){
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    let required = formData.get("required") as string | boolean;
    if (required === "true") {
      required = true;
    }else{
      required = false;
    }
    
    const prop = await createProp({name, description, type, required});
    setSuccess(true);
    setTimeout(() => {window.location.href = '/dashboard/props';}, 1500)
  }

  return (
    <div className="flex justify-center">
      <form action={handleSubmit} className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
        {success && <p className="p-2 text-white bg-green-500 rounded-md">Prop Created Successfully</p>}
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
        <label className="text-sm font-bold">Required:</label>
        <select name="required" className="p-2 text-black border rounded-md">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button className="p-2 text-white bg-blue-500 rounded-md">Create Prop</button>
      </form>
    </div>
  )
}