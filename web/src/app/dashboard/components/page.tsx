"use client";
import Label from "@/components/dashboard/LabelComp";
import { Button } from "@zabui/comps";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard(){
  const [components, setComponents] = useState([]);
  const deleteComponent = async (id: string) => {
    try {
      const res = await fetch(`/api/components/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      setComponents(components.filter((user: any) => user._id !== id));
    } catch (err: any) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetch('/api/components')
      .then(res => res.json())
      .then(data => setComponents(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <div className="my-4">
        <Button href="/dashboard/components/create" backColor="#007BFF" borderColor="#0056b3">
          Create Component
        </Button>
      </div>
      <div>
        {Array.isArray(components) && components.map((item, index) => (
          <Label key={index} component={item} onDelete={() => deleteComponent((item as any)._id)}/>
        ))}
      </div>  
    </>
  )
}