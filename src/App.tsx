import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import { CommentsAndPostsProvider } from "./CommentsAndPostsContext";
import PostsWithComments from "./PostsWithComments";


const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);


    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);

    const setFavoriteUser = (obj: IUserModel) => {
        setFavoriteUserState(obj);
    }

    return (
        <div>
            <HeaderComponent/>
            <CommentsAndPostsProvider>
                          <div className="App">
                            <PostsWithComments posts={posts} />
                          </div>
                        </CommentsAndPostsProvider>

            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
                },
                postStore: {
                    allPosts: posts,
                }
            }}>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>


        </div>
        )

};

export default App;
