import { createContext, useContext } from "react";
import { ICommentModel } from "../models/ICommentModel";
import { IPostModel } from "../models/IPostModel";
import { IUserModel } from "../models/IUserModel";

type StoreType = {
  usersStore: {
    allUsers: IUserModel[];
    favoriteUser: IUserModel | null;
    setFavoriteUser: (user: IUserModel) => void;
  };
  postsStore: {
    allPosts: IPostModel[];
    favoritePost: IPostModel | null;
    setFavoritePost: (post: IPostModel) => void;
  };
  commentsStore: {
    allComments: ICommentModel[];
    favoriteComment: ICommentModel | null;
    setFavoriteComment: (comment: ICommentModel) => void;
  };
};

export const defaultValue: StoreType = {
  usersStore: {
    allUsers: [],
    favoriteUser: null,
    setFavoriteUser: (user) => {
      console.log(user);
    },
  },
  postsStore: {
    allPosts: [],
    favoritePost: null,
    setFavoritePost: (post) => console.log(post),
  },
  commentsStore: {
    allComments: [],
    favoriteComment: null,
    setFavoriteComment: (comment) => console.log(comment),
  },
};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
  return useContext(Context);
};
