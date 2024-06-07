"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@zabui/comps';
import getComponentById from '@/actions/Comps/getComponentById';
import updateComponent from '@/actions/Comps/updateComponent';
import { set } from 'mongoose';

interface ComponentData {
    title: string;
    description: string;
    category: string;
    code: string;
    props: string;
    component: string;
}

export default function Update(){
    const [component, setComponent] = useState({
        title: '',
        description: '',
        category: '',
        code: '',
        props: '',
        component: ''
    } as ComponentData);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();
    useEffect(()=>{
        const fetchData = async () => {
            const res = await getComponentById({id: id as string});
            setComponent(res as ComponentData);
        }
        fetchData();
    }, [id]);
    
    const handleSubmit = async (e: any) => {
        try {
            await updateComponent({id: id as string, title: component.title, description: component.description, category: component.category, code: component.code, props: component.props, likes: '', component: component.component});
            setSuccess(true);
            setTimeout(() => {setSuccess(false)}, 3000)
        }
        catch(error){
            console.error("Error updating component:", error);
            setError(true);
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setComponent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
        

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
                <h1 className="mb-4 text-xl font-bold text-center">Update Component</h1>
                {error && <p className="p-2 text-white bg-red-500 rounded-md">Error updating component</p>}
                {success && <p className="p-2 text-white bg-green-500 rounded-md">Component updated</p>}
                <form className="space-y-4" action={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Title:</label>
                        <input type="text" id="title" name="title" value={component.title} className="p-2 text-black border rounded-md" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Description:</label>
                        <input type="text" id="description" name="description" value={component.description} className="p-2 text-black border rounded-md" onChange={handleChange}/>
                    </div> 
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Category:</label>
                        <input type="text" id="category" name="category" value={component.category} className="p-2 text-black border rounded-md" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Code:</label>
                        <input type="text" id="code" name="code" value={component.code} className="p-2 text-black border rounded-md" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col">
                        <label className='text-sm font-bold'>Component:</label>
                        <input type="text" id="component" name="component" value={component.component} className="p-2 text-black border rounded-md" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col">
                        <Button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}