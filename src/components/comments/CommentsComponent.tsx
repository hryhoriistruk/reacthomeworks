import { FC } from "react";
import { CommentModel } from "../../models/CommentModel";

interface IProps {
  comments: CommentModel[];
}

const CommentsComponent: FC<IProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.name}
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentsComponent;
