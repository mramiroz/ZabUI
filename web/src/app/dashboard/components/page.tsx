"use client";
import Label from "@/components/dashboard/LabelComp";
import { Button } from "@zabui/comps";
import { useEffect, useState } from "react";
import getComponents from "@/actions/Comps/getComponents";
import deleteComponent from "@/actions/Comps/deleteComponent";

export default function Dashboard(){
  const [components, setComponents] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponents(page, 10);
      setComponents(res as any);
    }
    fetchData();
  }, [page]);

  const isLastPage = components.length < 10;
  
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
    </>
  )
}