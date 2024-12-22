
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              
                return {
                    name: "harkirat",
                    id: "1",
                    email: "harkirat@gmail.com"
                }
            },
          })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;