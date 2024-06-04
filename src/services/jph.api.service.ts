import axios, { AxiosResponse } from "axios";
import { CommentModel } from "../models/CommentModel";
import { PostModel } from "../models/PostModel";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export const getAllPosts = (): Promise<AxiosResponse<PostModel[]>> => {
  return axiosInstance.get("/posts");
};

export const getAllCommentsOfSignlePost = (
  postId: number
): Promise<AxiosResponse<CommentModel[]>> => {
  return axiosInstance.get(`/comments?postId=${postId}`);
};
