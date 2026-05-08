import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage =async ({params}) => {
const {userid}=await params ;
const user=await getUserById(userid);
console.log(user)
  return (
    <div>
      user details: {user.name}
    </div>
  );
};

export default UserDetailsPage;