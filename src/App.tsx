import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { useStore } from "./context/ContextProvider";
import { apiSerivce } from "./services/api.service";

const App = () => {
  const { usersStore, postsStore, commentsStore } = useStore();

  useEffect(() => {
    apiSerivce.getAllUsers().then((val) => {
      usersStore.loadUsers(val.data);
    });
    apiSerivce.getAllPosts().then((val) => {
      postsStore.loadPosts(val.data);
    });
    apiSerivce.getAllComments().then((val) => {
      commentsStore.loadComments(val.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="layout">
      <div className="layoutHeader">
        <HeaderComponent />
      </div>
      <div className="layoutOutlet">
        <Outlet />
      </div>
      <div className="layoutFooter">
        <FooterComponent />
      </div>
    </div>
  );
};

export default App;
