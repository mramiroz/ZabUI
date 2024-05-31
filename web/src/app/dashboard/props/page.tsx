"use client";
import { useEffect, useState } from "react"
import { Button } from "@zabui/comps"
import getProps from "@/actions/Props/getProps"
import Label from "@/components/dashboard/LabelComp";
import deleteProp from "@/actions/Props/deleteProp";

export default function Dashboard(){
  const [props, setProps] = useState([]);
  const [page, setPage] = useState(1);

  useEffect (() => {
    const fetchData = async () => {
      const res = await getProps(page, 10);
      setProps(res as any);
    }
    fetchData();
  }, [page]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 my-10">
        <Button href="/dashboard/props/create" backColor="#1F2F71">
          Create Prop
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center py-2 my-10">
          {Array.isArray(props) && props.map((item, index) => (
            <Label key={index} component={item} onDelete={async () => deleteProp((item as any)._id)}/> 
          ))}
      </div>
        
    </>
  )
}