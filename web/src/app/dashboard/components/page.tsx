"use client";
import Label from "@/components/dashboard/LabelComp";
import { Button } from "@zabui/comps";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import getComponents from "@/actions/Comps/getComponents";
import deleteComponent from "@/actions/Comps/deleteComponent";

export default function Dashboard(){
  const [components, setComponents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponents();
      setComponents(res as any);
    }
    fetchData();
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
          <Label key={index} component={item} onDelete={async () => await deleteComponent((item as any)._id)}/>
        ))}
      </div>  
    </>
  )
}