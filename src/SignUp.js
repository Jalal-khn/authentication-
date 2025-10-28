"use server"
import { redirect } from "next/navigation";
import prisma from "./lib/db";

export async function SignupData({name , email , password}){
    if(!name || !email || !password ) {
        return {error:"please fill the all credential"}
    }
    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password
            }
            
        });
        return {success: "Data storeed Successfully"}
    }  catch(error) {
        console.error("error storing data:",error);
        return {error: "error while storing data"};

    }
}

export async function GetData() {
    const data = await prisma.user.findMany();
    return data;
}

export async function getSingleData(id) {
    try{
    const data = await prisma.user.findUnique({
        where:{id}
    });
     return data;
    } catch(err) {
        return err;
    }
}

export async function updateRecord({ id, name, email, password }) {
  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  // ✅ If same email, don't try to reassign (avoids unique conflict)
  const newEmail = existingUser.email === email ? undefined : email;

  await prisma.user.update({
    where: { id },
    data: {
      name,
      password,
      ...(newEmail && { email: newEmail }), // only update if new
    },
  });

  redirect("/dashboard");
}

export async function deleteData(id) {
    try {
        const res = await prisma.user.delete({
            where:{id}
        });
    } catch (error) {
        return null;
    }
}