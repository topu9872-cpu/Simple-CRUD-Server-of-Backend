import { UpdateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  const { userid } = await params;
  const user = await getUserById(userid);
  console.log(user);

  const updateUserWraper = async (formData) => {
     
    "use server";
    console.log(formData)
    return await UpdateUser( formData, userid);
   
  };

  return (
    <div>
      <h2>User Edit: {user.name} </h2>
      <div className="w-1/2 mx-auto my-auto card">
        <form action={updateUserWraper} className="flex flex-col gap-4">
          <TextField className="w-full" defaultValue={user?.name}>
            <Label>Name</Label>
            <Input name="name" type="text" placeholder="Enter your name" />
          </TextField>

          <TextField className="w-full" defaultValue={user?.email}>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="Enter your email" />
          </TextField>

          <TextField className="w-full" defaultValue={user?.role}>
            <Label>Role</Label>
            <Input name="role" type="text" placeholder="Enter user role" />
          </TextField>

          <div className="flex">
            <Button type="submit">Edit User</Button>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
