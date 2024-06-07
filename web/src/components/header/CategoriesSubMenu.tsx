"use client";

import { useEffect, useState } from "react";
import getCategories from "@/actions/Categories/getCategories";
import {LinkButton} from "@zabui/comps";



export default function CategoriesSubMenu({show}: {show: boolean}) {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCategories();
            setCategories(res);
        }
        fetchData();
    }, []);

    if (!show) return null;

    return (
        <div className="fixed z-30 bg-gray-700 w-full top-20">
            <div className="flex justify-center">
            {categories.map((category) => (
                <LinkButton href={`/categories/${category}`} text={category} color="white" key={category} />
            ))}
            </div>
        </div>
    )
}
