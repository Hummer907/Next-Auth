import { signIn,signOut,useSession } from "next-auth/react";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { SessionProvider } from "next-auth/react";



export default function Home() {



  return (
   <main>

    Homepage
   </main>
  );
}
