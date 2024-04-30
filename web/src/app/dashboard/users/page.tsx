"use client";
import { useEffect, useState } from 'react';
import Label from "@/components/dashboard/LabelUser";
import { Button } from "@compui/comps";

export default function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const deleteUser = async (id: string) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      setUsers(users.filter((user: any) => user._id !== id));
    } catch (err: any) {
      console.error(err);
    }
  }
  return(
    <>
      <div className="my-4">
        <Button href="/dashboard/create" backColor="#007BFF" borderColor="#0056b3">
          Create Component
        </Button>
      </div>
      <div>
        {Array.isArray(users) && users.map((item, index) => (
          <Label key={index} user={item} onDelete={() => deleteUser((item as any)._id)}/>
        ))}
      </div>  
    </>
  )
}