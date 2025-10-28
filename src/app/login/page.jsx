"use client"
import { LoginUp } from "@/Login"
import { useState } from "react"

export default function LoginPage(){
    const [email, Setemail] = useState("")
    const [password, Setpassword] = useState("")
    const [message, Setmessage] = useState("")

    async function HandleSubmit(e){
        e.preventDefault();
        const res = await LoginUp({email, password})
        Setmessage(res.error || res.success)
    }
    return(
        <main>
        <div className="flex justify-center items-center h-screen w-screen flex-col gap-4">
            <p className="text-3xl font-bold">Login your account</p>
            <form onSubmit={HandleSubmit}
            className="flex flex-col gap-2.5"
            action="">
            <input 
            value={email}
            onChange={(e) => Setemail(e.target.value)}
            className="px-2.5 py-1.5 border-2 border-amber-300 rounded-lg"
            type="email" 
            placeholder="enter your email"
            required/>
            <input 
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
            className="px-2.5 py-1.5 border-2 border-amber-300 rounded-lg"
            type="text" 
            placeholder="enter your password"
            required/>
            <button type="submit" 
            className="px-2.5 py-1.5 bg-amber-300 rounded-lg text-white font-bold">
                Submit
                </button>
                {message}
            </form>
        </div>
        </main>
    )
}