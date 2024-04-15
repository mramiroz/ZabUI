"use client";
import Card from "../../../components/component/card";
import { connectToDatabase } from "@/lib/mongodb";
import { useParams } from "next/navigation";
import { Component, useEffect, useState } from "react";

interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  props: any;
}

const Show = () => {
    const param = useParams();

    const [components, setComponents] = useState<ComponentData[] | null>(null);

    useEffect(() => {
        const category = param.category;
        fetch(`/api/categories/${category}`)
        .then(response => response.json())
        .then(data => {
            setComponents(data);
        })
        .catch(err => {
            console.error(err);
        })
    }, [param.category]);

    return(
        <div className="w-full">
        {Array.isArray(components) && components.map((item, index) => (
          <Card
            key={index}
            id={item._id.toString()}
            code={item.code}
            title={item.title}
            description={item.description}
            category={item.category}
            props={item.props}
          />
        ))}
      </div>
    )
}
export default Show;