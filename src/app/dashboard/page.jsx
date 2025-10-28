
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { redirect } from "next/navigation"
import { LogOut } from "@/logout"
import Image from "next/image"
import { GetData } from "@/SignUp"
import Link from "next/link"
import { DeleteRecord } from "../components/delete"
const SECRET = "mysecret9"
export default async function DashboardPage(){
    const cookieStore = await cookies()
    const Token = cookieStore.get("authtoken")?.value
    if(!Token){
        redirect("/login");
    }
    try{
        jwt.verify(Token, SECRET);
    }catch(error){
       redirect("/login")
    }
      const data = await GetData()
    
    return(
        <main>
            <p className="bg-green-400 text-white font-bold p-3 text-center text-3xl">You are login successfully</p>
           <div className="relative h-screen bg-[url('/RS.jpg')] bg-cover bg-no-repeat">
           <div className="absolute bg-black/75 inset-0 z-0"></div>
                <div className="relative z-10 h-full flex flex-col gap-4">
                 <p className="text-white mx-auto mt-3 font-bold text-xl">Registered Candidates</p>
                 <table className="text-white">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) =>
                        <tr key={item.id}>
                            <td className="text-center">
                               {item.name}
                            </td>
                            <td className="text-center">
                                {item.email}
                            </td>
                            <td className="text-center"><Link href={`/update/${item.id}`}>Update</Link></td>
                            <td className="text-center"><DeleteRecord  id={item.id}/></td>
                        </tr>
                        )}
                    </tbody>
                 </table>
                </div>
           </div>
           <div className="relative">
             <button onClick={LogOut}
             className="px-2.5 py-1.5 rounded-lg text-white font-bold bg-red-600">
                LogOut
             </button>
           </div>
        </main>
    )
}