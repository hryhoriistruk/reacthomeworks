import { createBrowserRouter } from "react-router-dom";
import CommentsByPostComponent from "../components/comments/CommentsByPostComponent";
import PostsComponent from "../components/posts/PostsComponent";
import UsersComponent from "../components/users/UsersComponent";
import AnotherLayout from "../layout/AnotherLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Fuck You!</h1>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "users", element: <UsersComponent /> },
      { path: "posts/:postId/comments", element: <CommentsByPostComponent /> },
      { path: "posts", element: <PostsComponent /> },
    ],
  },
  { path: "/okten", element: <AnotherLayout /> },
]);
