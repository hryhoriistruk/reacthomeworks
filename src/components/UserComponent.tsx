import { FC } from "react";
import { useStore } from "../context/ContextProvider";
import { IUserModel } from "../models/IUserModel";

interface IProps {
  user: IUserModel;
}

const UserComponent: FC<IProps> = ({ user }) => {
  const {
    usersStore: { setFavoriteUser },
  } = useStore();
  return (
    <div>
      {user.name}{" "}
      <button onClick={() => setFavoriteUser(user)}>Set as favorite</button>
    </div>
  );
};

export default UserComponent;
