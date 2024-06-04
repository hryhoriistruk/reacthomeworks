import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import UsersPostsCommentsPage from "../pages/UsersPostsCommentsPage";
import UsersPostsPage from "../pages/UsersPostsPage";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "/users", element: <UsersPage /> },
      { path: "/posts", element: <PostsPage /> },
      { path: "/comments", element: <CommentsPage /> },
      { path: "/usersPosts", element: <UsersPostsPage /> },
      { path: "/usersPostsComments", element: <UsersPostsCommentsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
