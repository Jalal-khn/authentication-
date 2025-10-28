"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LogOut(){
        await cookies().delete("authtoken");
        redirect("/login")
     }