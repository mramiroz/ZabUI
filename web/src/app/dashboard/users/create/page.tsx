import InputForm from '@/components/forms/InputForm';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';

export default function Create(){
  const createUser = async (formData: FormData) => {
    "use server";
    await connectToDatabase();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;
    console.log(name, email, password, role);

    const user = await User.create({name: name, email: email, password: password, role: role});
    console.log(user);
    user.save();
    return user;

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
      <h1 className="mb-4 text-xl font-bold text-center">Create Component</h1>
      <form action={createUser} className="space-y-4">
        <InputForm label="Name" type="text" name="name" placeholder="Name" required={true}/>
        <InputForm label="Email" type="email" name="email" placeholder="Email" required={true}/>
        <InputForm label="Password" type="password" name="password" placeholder="Password" required={true}/>
        <select name="role" className="px-4 py-2 text-white bg-gray-900 rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Create</button>
      </form>
    </div>
  </div>
  )
}