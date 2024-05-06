import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: {label: "Name", type: "text"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials: {name: string, password: string} | any) {
        try {
          await connectToDatabase();
          const {name, password} = credentials;
          const user = await User.findOne({name}).select("+password");
          if (!user) throw new Error("User not found");
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) throw new Error("Invalid password");
          return user;
        } catch (error: any) {
          throw new Error("Invalid credentials");
        }
      }
    })
  ],
  callbacks: {
    async signIn(params: any){
      const { user, account, profile } = params;
      if (account.provider === 'google') {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const randomPassword = crypto.randomBytes(16).toString('hex');
          const newUser = new User({name: user.name, email: user.email, password: randomPassword});
          await newUser.save();
        }
      }
      return true;
    },
    async jwt({token, user}){
      if (user){
          token.user = user;
      }
      return token;
    },
    async session({session, token}){
      session.user = token.user as any;
      return session;
    }
  },
};