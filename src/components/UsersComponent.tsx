import { useContextProvider } from "../context/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  const {
    usersStore: { allUsers },
  } = useContextProvider();

  return (
    <div>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            <UserComponent user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
