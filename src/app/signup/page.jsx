"use client"

import { useState } from "react"
import { SignupData } from "@/SignUp"

export default function SignUp(){
    const [name, Setname] = useState("")
    const [email, Setemail] = useState("")
    const [password, Setpassword] = useState("")
    const [message, Setmessage] = useState("")

    async function HandleSubmit(e){
         e.preventDefault();
          const response = await SignupData({name, email, password})
          Setmessage(response.success || response.error);
    }
    return(
        <main>
        <form onSubmit={HandleSubmit}
        className="flex flex-col gap-5 h-screen justify-center items-center"
        action="">
           <div className="flex flex-col gap-3">
             <label 
            className="text-xl font-bold"
            htmlFor="name">Name</label>
            <input value={name}
            onChange={(e)=> Setname(e.target.value)}
            className="px-4 py-1.5 border-2 border-amber-400 rounded-lg"
            type="text" 
            id="name" required
            placeholder="enter your name..."/>
           </div>
            <div className="flex flex-col gap-3">
             <label 
            className="text-xl font-bold"
            htmlFor="Email">Email</label>
            <input value={email}
             onChange={(e)=> Setemail(e.target.value)}
            className="px-4 py-1.5 border-2 border-amber-400 rounded-lg"
            type="email" 
            id="Email" required
            placeholder="example@gmail.com"/>
           </div>
            <div className="flex flex-col gap-3">
             <label 
            className="text-xl font-bold"
            htmlFor="password">Password</label>
            <input value={password}
             onChange={(e)=> Setpassword(e.target.value)}
            className="px-4 py-1.5 border-2 border-amber-400 rounded-lg"
            type="text" 
            id="password" 
            placeholder="******"/>
           <button 
           className="bg-red-500 font-bold text-white rounded-lg"
           type="submit">Submit</button>
           {message}
           </div>
        </form>
        </main>
    )
}