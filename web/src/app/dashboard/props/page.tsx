"use client";
import { useEffect, useState } from "react"
import { Button } from "@zabui/comps"
import Label from "@/components/dashboard/LabelProps";
import deleteProp from "@/actions/Props/deleteProp";
import getPropsPage from "@/actions/Props/getPropsPage";

export default function Dashboard(){
  const [props, setProps] = useState([]);
  const [page, setPage] = useState(1);

  useEffect (() => {
    const fetchData = async () => {
      const res = await getPropsPage(page, 10);
      setProps(res as any);
    }
    fetchData();
  }, [page]);

  const handleDelete = async (id: string) => {
    await deleteProp(id);
    const res = await getPropsPage(page, 10);
    setProps(res as any);
  }

  const isLastPage = props.length < 10;

  return (
    <div className="mx-10">
      <div className="my-4">
        <Button href="/dashboard/props/create">
          Create Prop
        </Button>
      </div>
      <div>
          {Array.isArray(props) && props.map((item, index) => (
            <Label key={index}  prop={item} onDelete={() => handleDelete((item as any)._id)}/> 
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