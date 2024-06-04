import { Link } from "react-router-dom";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <nav>
      <ul className="menuList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/usersPosts">User & Posts</Link>
        </li>
        <li>
          <Link to="/usersPostsComments">User & Posts & Comments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
