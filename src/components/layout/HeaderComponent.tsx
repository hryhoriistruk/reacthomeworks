import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <nav>
      <ul className="menuList">
        <li>
          <NavLink to="/auth">Auth Page</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Cars Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
