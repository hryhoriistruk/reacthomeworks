import { useStore } from "../context/ContextProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
  const {
    commentsStore: { allComments },
  } = useStore();
  return (
    <div>
      <ul>
        {allComments.map((comment) => (
          <li key={comment.id}>
            <CommentComponent comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsComponent;
