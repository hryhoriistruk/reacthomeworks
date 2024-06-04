import { FC } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { ICommentModel } from "../models/ICommentModel";

interface IProps {
  comment: ICommentModel;
}

const CommentComponent: FC<IProps> = ({ comment }) => {
  const {
    commentsStore: { setFavoriteComment },
  } = useContextProvider();
  return (
    <div>
      {comment.body}
      <button
        onClick={() => {
          setFavoriteComment(comment);
        }}
      >
        Set as favorite
      </button>
    </div>
  );
};

export default CommentComponent;
