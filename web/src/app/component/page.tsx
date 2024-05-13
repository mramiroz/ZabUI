import { connectToDatabase } from '@/lib/mongodb';
import Card from '@/components/component/Card';
import Component from '@/models/Component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Components",
  description: "Search and find the best components for your website",

}
export default async function Home(){
  const getComponents = async () => {
    "use server"
    await connectToDatabase();
    const components = await Component.find();
    if (!components) {
      return {message: "No components found", status: 404};
    }
    return components;
  }
  const components = await getComponents();
  return (
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
  );
}