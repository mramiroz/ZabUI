"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ObjectId } from 'mongodb';
import getUserById from '@/actions/Users/getUserById';
import updateUser from '@/actions/Users/updateUser';

interface UserData{
  _id: ObjectId;
  name: string;
  email: string;
  role: string;
  favComps: ObjectId[];
  password: string;
}

export default function Update(){
    const [user, setUser] = useState<UserData>({} as UserData);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(()=>{
      const fetchData = async () =>{
          const user = await getUserById(id as string);
          setUser(user as UserData);
      }
      fetchData();
    }, [id]);

    const handleOnchange = (e: any) => {
        const { name, value } = e.target;
        setUser((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const handleOnSubmit = async (FormData: FormData) => {
        const id = user._id.toString();
        const name = FormData.get('name');
        const email = FormData.get('email');
        const role = FormData.get('role');
        const res = await updateUser({id: id, name: user.name, email: user.email, role: user.role, password: user.password});
        if (res){
            setSuccess(true);
            setTimeout(() => {window.location.href = "/dashboard/users"}, 1500);
        }
        else{
            setError(true);
        }
    }

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
            <h1 className="mb-4 text-xl font-bold text-center">Update User</h1>
            {error && <p className="p-2 text-white bg-red-500 rounded-md">Error updating user</p>}
            {success && <p className="p-2 text-white bg-green-500 rounded-md">User updated</p>}
            <form className="space-y-4" action={handleOnSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Name:</label>
                    <input type="text" id="name" name="name" value={user.name} className="p-2 text-black border rounded-md" onChange={handleOnchange} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} className="p-2 text-black border rounded-md" onChange={handleOnchange}/>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Role:</label>
                    <select id="role" name="role" value={user.role} className="p-2 text-black border rounded-md" onChange={handleOnchange}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" >Update</button>
                </div>
            </form>
        </div>
      </div>
  )   
}