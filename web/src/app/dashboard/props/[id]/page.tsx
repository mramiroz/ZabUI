"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getPropById from "@/actions/Props/getPropById";
import { Button } from "@zabui/comps";
import updateProp from "@/actions/Props/updateProp";

interface propData {
    name: string;
    description: string;
    type: string;
    required: boolean;
}


export default function Update(){
    const [prop, setProp] = useState<any | null>({
        name: '',
        description: '',
        type: '',
        required: false
    } as propData);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPropById({id: id as string});
            setProp(res);
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e: any) => {
        try {
            await updateProp({id: id as string, name: prop.name, description: prop.description, type: prop.type, required: prop.required})
            setSuccess(true);
            setTimeout(() => {setSuccess(false)}, 3000)
        } catch (error) {
            console.error("Error updating prop:", error);
            setError(true);
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProp((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
                <h1 className="mb-4 text-xl font-bold text-center">Update Component</h1>
                {error && <p className="p-2 text-white bg-red-500 rounded-md">Error updating component</p>}
                {success && <p className="p-2 text-white bg-green-500 rounded-md">Component updated</p>}
                <form className="space-y-4" action={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Name:</label>
                        <input type="text" id="name" name="name" value={prop.name} className="p-2 text-black border rounded-md" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Description:</label>
                        <input type="text" id="description" name="description" value={prop.description} className="p-2 text-black border rounded-md" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Type:</label>
                        <select name="type" className="p-2 text-black border rounded-md" onChange={handleChange}>
                            <option value="string">string</option>
                            <option value="number">number</option>
                            <option value="boolean">boolean</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Input:</label>
                        <select name="required" className="p-2 text-black border rounded-md" onChange={handleChange}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <Button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Update</Button>
                    </div>
                </form>
            </div>
        </div>    

    )
}