import { FC } from "react";

const users = [
  { name: "Simon", age: 40, status: true },
  { name: "Sasha", age: 30, status: false },
  { name: "Oleksandr", age: 28, status: true },
  { name: "Shurik", age: 35, status: false },
  { name: "Shura", age: 42, status: true },
  { name: "Saniok", age: 17, status: false },
  { name: "San`ka", age: 11, status: true },
  { name: "Saniochok", age: 25, status: false },
  { name: "Sanchos", age: 35, status: true },
];

const UsersComponent: FC<any> = ({ lift }) => {
  return (
    <div style={{ border: "1px solid" }}>
      {users.map((user, index) => (
        <div key={index}>
          {user.name}
          <button onClick={() => lift(user)}>xxx</button>
        </div>
      ))}
    </div>
  );
};

export default UsersComponent;
