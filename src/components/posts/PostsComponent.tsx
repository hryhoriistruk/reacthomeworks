import { FC, useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { getAllPosts } from "../../services/jph.api.service";
import PostComponent from "../post/PostComponent";

type IPropsProps = { lift?: (postId: number) => void };

const PostsComponent: FC<IPropsProps> = ({ lift }) => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} lift={lift} />
      ))}
    </div>
  );
};

export default PostsComponent;
