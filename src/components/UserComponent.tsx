import { FC } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { IUserModel } from "../models/IUserModel";

interface IProps {
  user: IUserModel;
}

const UserComponent: FC<IProps> = ({ user }) => {
  const {
    usersStore: { setFavoriteUser },
  } = useContextProvider();
  return (
    <div>
      {user.name}{" "}
      <button onClick={() => setFavoriteUser(user)}>Set as favorite</button>
    </div>
  );
};

export default UserComponent;
