"use client"
import Label from "@/components/dashboard/LabelUser";
import { Button } from "@zabui/comps";
import { useEffect, useState } from "react";
import getUsers from "@/actions/Users/getUsers";
import deleteUser from "@/actions/Users/deleteUser";

export default function Users(){

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers(page, 10);
      if (!users) {
        return ;
      }
      setUsers(users as any);
    }
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser({id});
    const users = await getUsers();
    setUsers(users as any);
  }

  const isLastPage = users.length < 10;

  return(
    <div className="mx-10">
      <div className="my-4">
        <Button href="/dashboard/users/create">
          Create User
        </Button>
      </div>
      <div>
        {Array.isArray(users) && users.map((item, index) => (
          <Label key={index} user={item} onDelete={() => handleDelete((item as any)._id)}/>
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