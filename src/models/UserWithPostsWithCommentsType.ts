import { ICommentModel } from "./ICommentModel";
import { IPostModel } from "./IPostModel";
import { IUserModel } from "./IUserModel";

export type UserWithPostsWithCommentsType = {
  user: IUserModel;
  posts: {
    post: IPostModel;
    comments: ICommentModel[];
  }[];
};
