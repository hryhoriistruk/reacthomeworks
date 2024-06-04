import axios, { AxiosResponse } from "axios";
import { ICommentModel } from "../models/CommentModel";
import { IPostModel } from "../models/PostModel";
import { IUserModel } from "../models/UserModel";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

const userApiSerivce = {
  getAllUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
    return await axiosInstance.get("/users");
  },

  getUserByUserId: async (
    userId: number
  ): Promise<AxiosResponse<IUserModel>> => {
    return await axiosInstance.get(`/users/${userId}`);
  },

  getAllPosts: async (): Promise<AxiosResponse<IPostModel[]>> => {
    return await axiosInstance.get("/posts");
  },

  getCommentsByPost: async (
    postId: string
  ): Promise<AxiosResponse<ICommentModel[]>> => {
    return await axiosInstance.get(`/posts/${postId}/comments`);
  },
};

export { userApiSerivce };
