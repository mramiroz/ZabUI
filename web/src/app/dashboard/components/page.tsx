"use client";
import Label from "@/components/dashboard/LabelComp";
import { Button } from "@zabui/comps";
import { useEffect, useState } from "react";
import getComponents from "@/actions/Comps/getComponents";
import deleteComponent from "@/actions/Comps/deleteComponent";

export default function Dashboard(){
  const [components, setComponents] = useState<any>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponents(page, 10);
      setComponents(res as any);
    }
    fetchData();
  }, [page]);

  const handleDelete = async (id: string) => {
    await deleteComponent({ id: id as string });
    const res = await getComponents(page, 10);
    setComponents(res as any);
  }

  const isLastPage = components.length < 10;
  
  return (
    <div className="mx-10">
      <div className="my-4">
        <Button href="/dashboard/components/create">
          Create Component
        </Button>
      </div>
      <div>
        {Array.isArray(components) && components.map((item, index) => (
          <Label key={index} component={item} onDelete={() => handleDelete(item._id.toString()) }/>
        ))}
      </div>
      <div className="my-4">
      <button 
          className={`font-bold py-2 px-4 rounded ${page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button 
          className={`font-bold py-2 px-4 rounded ml-4 ${isLastPage ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}