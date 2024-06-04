import axios, { AxiosResponse } from "axios";
import { IPostForm } from "../components/FormComponent";
import { PostModel } from "../models/PostModel";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export const getAllPosts = (): Promise<AxiosResponse<PostModel[]>> => {
  return axiosInstance.get("/posts");
};

export const createPost = (
  postData: IPostForm
): Promise<AxiosResponse<{ data: IPostForm; id: number }>> => {
  return axiosInstance.post("/posts", { data: postData });
};
