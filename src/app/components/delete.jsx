"use client"
import { deleteData } from "@/SignUp";

export function DeleteRecord({id}) {
    
    const handleDelete = async () => {
        
        const res = await deleteData(id);
    }

    return (
        <p onClick={handleDelete} className="cursor-pointer">Delete</p>
    )
}