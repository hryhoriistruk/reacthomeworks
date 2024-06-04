import { FC, useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { getAllPosts } from "../../services/jph.api.service";
import PostComponent from "../post/PostComponent";

interface IPostsProps {
  newPost: PostModel | undefined;
}

const PostsComponent: FC<IPostsProps> = ({ newPost }) => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);
  useEffect(() => {
    if (newPost) {
      setPosts([...posts, newPost]);
    }
  }, [newPost]);

  return (
    <div>
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
    </div>
  );
};

export default PostsComponent;
