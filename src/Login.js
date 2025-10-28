"use server"
import { redirect } from "next/navigation";
import prisma from "./lib/db"
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers";
const SECRET = "mysecret9"
export async function LoginUp({email, password}){
    if(!email || !password){
        return {error: "please fill the all credential"}
    }
    
        const user = await prisma.user.findUnique({
            where: {email},
        });
        if(!user){
            return {error:"user is not found"}
        }
        if(user.password !== password){
            return {error:"invalid password"}
        }  

        const Token = Jwt.sign(
            {id:user.id, email:user.email},
            SECRET
        );
         cookies().set("authtoken",Token,{
            httponly: true,
            secure: true,
            path:"/"
         });
        
        redirect("/dashboard")
    }

     