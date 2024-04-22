import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcrypt';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials : any){
                try{
                    const db = await connectToDatabase();
                    const {username, password} = credentials;
                    const user = await User.findOne({username}).select("+password");
                    if (!user) throw new Error("User not found");
                    const isValid = await bcrypt.compare(password, user.password);
                    if (!isValid) throw new Error("Invalid password");
                    return user;
                } catch(error: any){
                    throw new Error("Invalid credentials");
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if (user){
                token.user = user;
            }
            return token;
        },
        async session({session, token}){
            session.user = token.user;
            return session;
        }
    }
});

export {handler as GET, handler as POST}