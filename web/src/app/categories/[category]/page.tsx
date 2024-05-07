import Card from "@/components/component/Card";
import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";
import { useParams } from "next/navigation";

export default async function Show() {
    const param = useParams();

    const getComponentsCategory = async (category: string) => {
      "use server";
      await connectToDatabase();
      const components = await Component.find({category: category});
      if (!components) {
        return {message: "No components found", status: 404};
      }
      return components;
    }
    const components = await getComponentsCategory(param.category as string);

    return(
        <div className="flex flex-wrap justify-center w-full">
        {Array.isArray(components) && components.map((item, index) => (
          <Card
            key={index}
            id={item._id}
            code={item.code}
            title={item.title}
            description={item.description}
            category={item.category}
            props={item.props}
            likes={item.likes}
          />
        ))}
      </div>
    )
}