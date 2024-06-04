import { FC } from "react";
import { PostModel } from "../../models/PostModel";

interface IProps {
  post: PostModel;
}

type IPropTypes = IProps & { children?: React.ReactNode } & {
  lift?: (postId: number) => void;
};

const PostComponent: FC<IPropTypes> = ({ post, lift }) => {
  function onClickHandler(): void {
    !!lift && lift(post.id);
  }

  return (
    <div>
      {post.id} {post.title}
      <p>{post.body}</p>
      <div>
        <button onClick={onClickHandler}>Show Comments</button>
      </div>
      <hr />
    </div>
  );
};

export default PostComponent;
