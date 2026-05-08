
import { getUers } from '../lib/data';
import UsersTable from '../components/usersTable';
import { deleteUesr } from '../lib/actions';

const Userspage =async () => {
    const users= await getUers();
  return (
    <div>
      <h2>user management: {users.length}</h2>
      <UsersTable users={users} deleteUserAction={deleteUesr} />
    </div>
  );
};

export default Userspage;