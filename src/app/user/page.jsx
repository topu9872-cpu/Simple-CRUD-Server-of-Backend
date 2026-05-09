
import { getUers } from '../lib/data';
import UsersTable from '../components/usersTable';
import { createUser, deleteUesr } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const Userspage =async () => {
    const users= await getUers();
  return (
    <div>
    <div className='my-10'>
          <h2>user management: {users.length}</h2>
          <AddUserModal createUserAction={createUser} />
    </div>

      <UsersTable users={users} deleteUserAction={deleteUesr} />
    </div>
  );
};

export default Userspage;