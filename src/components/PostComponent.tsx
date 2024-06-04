import { FC } from "react";
import { useStore } from "../context/ContextProvider";
import { IPostModel } from "../models/IPostModel";

interface IProps {
  post: IPostModel;
}

const PostComponent: FC<IProps> = ({ post }) => {
  const {
    postsStore: { setFavoritePost },
  } = useStore();
  return (
    <div>
      {post.title}{" "}
      <button
        onClick={() => {
          setFavoritePost(post);
        }}
      >
        Set as favorite
      </button>
    </div>
  );
};

export default PostComponent;
