import { IPostModel } from "./IPostModel";
import { IUserModel } from "./IUserModel";

export type UserWithPostsType = {
  user: IUserModel;
  posts: IPostModel[];
};
