import { useEffect, useMemo, useState } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { UserWithPostsType } from "../models/UserWithPostsType";
import PostComponent from "./PostComponent";
import UserComponent from "./UserComponent";

const UsersPostsComponent = () => {
  const {
    usersStore: { allUsers },
    postsStore: { allPosts },
  } = useContextProvider();

  const [usersWithPosts, setUsersWithPosts] = useState<UserWithPostsType[]>([]);

  const usersWithPostsArray = useMemo(() => {
    return () => {
      return allUsers.map((user) => {
        const posts = allPosts.filter((post) => post.userId == user.id);
        const newUser = {
          user,
          posts,
        };
        return newUser;
      });
    };
  }, [allPosts, allUsers]);

  useEffect(() => {
    setUsersWithPosts(usersWithPostsArray);
  }, [usersWithPostsArray]);

  return (
    <div>
      {usersWithPosts.map((user) => (
        <div key={user.user.id}>
          <UserComponent user={user.user} />
          <ul>
            {user.posts.map((post) => (
              <li key={post.id}>
                <PostComponent post={post} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UsersPostsComponent;
