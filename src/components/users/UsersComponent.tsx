import { useEffect, useState } from "react";
import { IUserModel } from "../../models/UserModel";
import { userApiSerivce } from "../../services/api.service";

const UsersComponent = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  useEffect(() => {
    userApiSerivce.getAllUsers().then((val) => {
      setUsers(val.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
