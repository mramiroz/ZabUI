"use server";
import User from '@/models/User';

export default async function getUsers(page: number, limit: number){
  const users = await User.find().skip((page - 1) * limit).limit(limit);
  if (!users) {
    return {message: "No users found", status: 404};
  }
  let res = JSON.parse(JSON.stringify(users));
  return res;
}