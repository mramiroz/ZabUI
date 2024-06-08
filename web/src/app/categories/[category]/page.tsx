"use client";
import Card from "@/components/component/Card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getComponentsCategory from "@/actions/Categories/getComponentsCategory";


interface UserInterface{
  _id: string;
  title: string;
  description: string;
  category: string;
  component: string;
  import: string;
  likes: number;

}

export default function Show() {
    const param = useParams();
    const [page, setPage] = useState(1);
    const [components, setComponents] = useState<UserInterface[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const category = Array.isArray(param.category) ? param.category[0] : param.category;
        const res = await getComponentsCategory(category, 5, 1);
        setComponents(res);
      }
      fetchData();
    }, [param.category])

    const isLastPage = components.length < 5;
    return(
          <div>
          {Array.isArray(components) && components.map((item, index) => (
            <Card
              key={index}
              id={item._id.toString()}
              importComp={item.import}
              title={item.title}
              description={item.description}
              component={item.component}
              likes={item.likes}
            />
          ))}
            <div className="flex justify-center mt-4">
                <button 
                  className={`font-bold py-2 px-4 rounded ${page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                  onClick={() => {
                    setPage(page - 1);
                    window.scrollTo(0, 0);
                  }}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <button 
                  className={`font-bold py-2 px-4 rounded ml-4 ${isLastPage ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                  onClick={() => {
                    setPage(page + 1);
                    window.scrollTo(0, 0);
                  }}
                >
                  Next
                </button>
            </div>
          
        </div>
    )
}