import { revalidatePath } from "next/cache";

export const deleteUesr=async (userid)=>{
'use server';

const res=await fetch(`http://localhost:5000/users/${userid}`,{
  method:'DELETE'
    } )
const data =await res.json();
console.log(data,'after delete')
if(data.deletedCount > 0 ){
    revalidatePath('/users')
}
return data;
}