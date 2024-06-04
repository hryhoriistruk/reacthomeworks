import { FC } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { IPostModel } from "../models/IPostModel";

interface IProps {
  post: IPostModel;
}

const PostComponent: FC<IProps> = ({ post }) => {
  const {
    postsStore: { setFavoritePost },
  } = useContextProvider();
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
