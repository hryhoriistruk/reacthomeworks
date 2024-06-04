import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <nav>
      <ul className="menuList">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
