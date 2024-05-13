"use client";
import Card from "@/components/component/Card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getComponentsCategory from "@/actions/Categories/getComponentsCategory";

export const generateMetaData = ({ category }: Params) => {
  return {
    title: category.category,
    description: "Search and find the best components for your website",
  }
}
interface Params{
  category:{
    category: string;
  }
}

interface UserInterface{
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  props: string[];
  likes: number;

}

export default function Show() {
    const param = useParams();
    const [components, setComponents] = useState<UserInterface[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const category = Array.isArray(param.category) ? param.category[0] : param.category;
        const res = await getComponentsCategory(category);
        setComponents(res);
      }
      fetchData();
    }, [param.category])

    return(
          <div>
          {Array.isArray(components) && components.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              code={item.code}
              title={item.title}
              description={item.description}
              category={item.category}
              component={item.component}
              props={item.props}
              likes={item.likes}
            />
          ))}
        </div>
    )
}