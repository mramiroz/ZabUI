"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@compui/comps';

interface ComponentData {
    title: string;
    description: string;
    category: string;
    code: string;
    props: string;
    likes: number;
}

export default function Update(){
    const [component, setComponent] = useState({} as ComponentData);
    const { id } = useParams();
    useEffect(() => {
        fetch(`/api/components/${id}`)
            .then(res => res.json())
            .then(data => setComponent(data))
            .catch(err => console.error(err));
    }, []);
    
    const updateComponent = (updatedData: ComponentData) => {
        fetch(`/api/components/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
                <h1 className="mb-4 text-xl font-bold text-center">Update Component</h1>
                <form className="space-y-4">
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
                        <textarea id="code" name="code" value={component.code} className="p-2 text-black border rounded-md"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Props:</label>
                        <textarea id="props" name="props" value={component.props} className="p-2 text-black border rounded-md"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Likes:</label>
                        <input type="number" id="likes" name="likes" value={component.likes} className="p-2 text-black border rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <Button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}