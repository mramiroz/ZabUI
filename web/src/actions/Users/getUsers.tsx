"use server";
import User from '@/models/User';

export default async function getUsers(){
  const users = await User.find();
  if (!users) {
    return {message: "No users found", status: 404};
  }
  return users;
}