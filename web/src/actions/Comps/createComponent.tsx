"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";

export default async function createComponent({title, description, category, importValue,  code, component}: {title: string, description: string, category: string, importValue: string, code: string, component: string}) {
    await connectToDatabase();
    const newComponent = new Component({
        title,
        description,
        category,
        import: importValue,
        code,
        component
    });
    let res = await newComponent.save();
    res = JSON.parse(JSON.stringify(res));
    return res;
    }