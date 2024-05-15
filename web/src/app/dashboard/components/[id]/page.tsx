"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@zabui/comps';
import { get } from 'http';
import getComponentById from '@/actions/Comps/getComponentById';
import updateComponent from '@/actions/Comps/updateComponent';

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
    const { id } = useParams();
    useEffect(()=>{
        const fetchData = async () => {
            const res = await getComponentById({id: id as string});
            setComponent(res);
        }
        fetchData();
    }, [id]);
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await updateComponent({id: id as string, title: component.title, description: component.description, category: component.category, code: component.code, props: component.props, likes: '', component: component.component});
            alert('Component updated successfully');
        }
        catch(error){
            console.error("Error updating component:", error);
            alert('Error updating component');
        }
    }
        

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
                <h1 className="mb-4 text-xl font-bold text-center">Update Component</h1>
                <form className="space-y-4" action={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Title:</label>
                        <input type="text" id="title" name="title" value={component.title} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Description:</label>
                        <input type="text" id="description" name="description" value={component.description} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Category:</label>
                        <input type="text" id="category" name="category" value={component.category} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Code:</label>
                        <input type="text" id="code" name="code" value={component.code} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Props:</label>
                        <input type="text" id="props" name="props" value={component.props} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-sm font-bold'>Component:</label>
                        <input type="text" id="component" name="component" value={component.component} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <Button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}