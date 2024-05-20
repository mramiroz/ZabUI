import Component from '@/models/Component';
import InputForm from '@/components/forms/InputForm';
import { connectToDatabase } from '@/lib/mongodb';
import SelectProps from '@/components/dashboard/SelectProps';

export default async function CreateComponent() {
  const createComponent = async (formData: FormData) => {
    "use server";
    await connectToDatabase();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const props = formData.get("props") as string;
    const importLabel = formData.get("import") as string;
    const code = formData.get("code") as string;
    const componentName = formData.get("component") as string;
    const component = await Component.create({title, description, category, props, import: importLabel, code, component: componentName});
    component.save();
    return component;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
        <h1 className="mb-4 text-xl font-bold text-center">Create Component</h1>
        <form action={createComponent} className="space-y-4">
          <InputForm label="Title" type="text" name="title" placeholder="Title" required={true}/>
          <InputForm label="Description" type="text" name="description" placeholder="Description" required={true}/>
          <InputForm label="Category" type="text" name="category" placeholder="Category" required={true}/>
          <SelectProps/>
          <InputForm label="Import" type="text" name="import" placeholder="Import" required={true}/>
          <InputForm label="Code" type="text" name="code" placeholder="Code" required={true}/>
          <InputForm label="Component" type="text" name="component" placeholder="Component" required={true}/>
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Create</button>
        </form>
      </div>
    </div>
  );
}