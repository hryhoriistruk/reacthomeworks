import { create } from "zustand";
import { ICommentModel } from "../models/ICommentModel";
import { IPostModel } from "../models/IPostModel";
import { IUserModel } from "../models/IUserModel";

type StoreType = {
  usersStore: {
    allUsers: IUserModel[];
    loadUsers: (users: IUserModel[]) => void;
    favoriteUser: IUserModel | null;
    setFavoriteUser: (user: IUserModel) => void;
  };
  postsStore: {
    allPosts: IPostModel[];
    loadPosts: (posts: IPostModel[]) => void;
    favoritePost: IPostModel | null;
    setFavoritePost: (post: IPostModel) => void;
  };
  commentsStore: {
    allComments: ICommentModel[];
    loadComments: (posts: ICommentModel[]) => void;
    favoriteComment: ICommentModel | null;
    setFavoriteComment: (comment: ICommentModel) => void;
  };
};

export const useStore = create<StoreType>()((set) => {
  return {
    usersStore: {
      allUsers: [],
      loadUsers: (users: IUserModel[]) => {
        return set((state: StoreType) => {
          return {
            ...state,
            usersStore: { ...state.usersStore, allUsers: users },
          };
        });
      },
      favoriteUser: null,
      setFavoriteUser: (user: IUserModel) => {
        return set((state: StoreType) => {
          return {
            ...state,
            usersStore: { ...state.usersStore, favoriteUser: user },
          };
        });
      },
    },
    postsStore: {
      allPosts: [],
      loadPosts: (posts: IPostModel[]) => {
        return set((state: StoreType) => {
          return {
            ...state,
            postsStore: { ...state.postsStore, allPosts: posts },
          };
        });
      },
      favoritePost: null,
      setFavoritePost: (post: IPostModel) => {
        return set((state: StoreType) => {
          return {
            ...state,
            postsStore: { ...state.postsStore, favoritePost: post },
          };
        });
      },
    },
    commentsStore: {
      allComments: [],
      loadComments: (comments: ICommentModel[]) => {
        return set((state: StoreType) => {
          return {
            ...state,
            commentsStore: { ...state.commentsStore, allComments: comments },
          };
        });
      },
      favoriteComment: null,
      setFavoriteComment: (comment: ICommentModel) => {
        return set((state: StoreType) => {
          return {
            ...state,
            commentsStore: { ...state.commentsStore, favoriteComment: comment },
          };
        });
      },
    },
  };
});
