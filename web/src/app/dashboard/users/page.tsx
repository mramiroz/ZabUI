"use client"
import Label from "@/components/dashboard/LabelUser";
import { Button } from "@zabui/comps";
import { useEffect, useState } from "react";
import getUsers from "@/actions/Users/getUsers";
import deleteUser from "@/actions/Users/deleteUser";

export default function Users(){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      if (!users) {
        return ;
      }
      setUsers(users as any);
    }
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await deleteUser({id});
    if (res.status === 200) {
      const newUsers = users.filter((user: any) => user._id !== id);
      setUsers(newUsers);
    }
  }


  return(
    <>
      <div className="my-4">
        <Button href="/dashboard/users/create" backColor="#007BFF" borderColor="#0056b3">
          Create User
        </Button>
      </div>
      <div>
        {Array.isArray(users) && users.map((item, index) => (
          <Label key={index} user={item} onDelete={handleDelete}/>
        ))}
      </div>  
    </>
  )
}