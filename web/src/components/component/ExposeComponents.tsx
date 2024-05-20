import Card from '@/components/component/Card';

export default function ExposeComponents(components: any[]) {
  return (
    Array.isArray(components) && components.map((item, index) => (
      <Card
        key={index}
        id={item._id.toString()}
        code={item.code}
        title={item.title}
        description={item.description}
        category={item.category}
        component={item.component}
        props={item.props}
        likes={item.likes}
      />
    ))
  );
}