import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Context } from "./context/ContextProvider";
import { ICommentModel } from "./models/ICommentModel";
import { IPostModel } from "./models/IPostModel";
import { IUserModel } from "./models/IUserModel";
import { apiSerivce } from "./services/api.service";

const App = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [posts, setPosts] = useState<IPostModel[]>([]);
  const [comments, setComments] = useState<ICommentModel[]>([]);
  const [favoriteUser, setFavoriteUser] = useState<IUserModel | null>(null);
  const [favoritePost, setFavoritePost] = useState<IPostModel | null>(null);
  const [favoriteComment, setFavoriteComment] = useState<ICommentModel | null>(
    null
  );

  useEffect(() => {
    apiSerivce.getAllUsers().then((res) => setUsers(res.data));
    apiSerivce.getAllPosts().then((res) => setPosts(res.data));
    apiSerivce.getAllComments().then((res) => setComments(res.data));
  }, []);

  return (
    <div className="layout">
      <div className="layoutHeader">
        <HeaderComponent />
      </div>
      <Context.Provider
        value={{
          usersStore: {
            allUsers: users,
            favoriteUser,
            setFavoriteUser,
          },
          postsStore: {
            allPosts: posts,
            favoritePost,
            setFavoritePost,
          },
          commentsStore: {
            allComments: comments,
            favoriteComment,
            setFavoriteComment,
          },
        }}
      >
        <div className="layoutOutlet">
          <Outlet />
        </div>
        <div className="layoutFooter">
          <FooterComponent />
        </div>
      </Context.Provider>
    </div>
  );
};

export default App;
