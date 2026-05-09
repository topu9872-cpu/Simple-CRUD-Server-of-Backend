import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUesr = async (userid) => {
    'use server';

    const res = await fetch(`http://localhost:5000/users/${userid}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    console.log(data, 'after delete')
    if (data.deletedCount > 0) {
        revalidatePath('/users')
    }
    return data;
};


export const createUser = async (formData) => {
    'use server';
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser, 'get new user')
    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();

    if (data.insertedId) {
        revalidatePath('/users');
    }
  return data;
};

export const UpdateUser=async(formData,userid)=>{
    "use server"
    const updatedUser=Object.fromEntries(formData.entries())
    const res=await fetch(`http://localhost:5000/users/${userid}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedUser)
    });
    const data=await res.json();
    console.log(data,'after update');
    if(data.modifiedCount > 0){
        revalidatePath('/user');
        redirect('/user')
    }
}