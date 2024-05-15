import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
const mongoose = require('mongoose');

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined. Please check your environment variables.");
}

let db;

export async function connectToDatabase() {
  if (!db) {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("CompUI");
    await mongoose.connect(uri, { dbName: 'CompUI'});
  }
  return db;
}