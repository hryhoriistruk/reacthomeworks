import { useContextProvider } from "../context/ContextProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
  const {
    commentsStore: { allComments },
  } = useContextProvider();
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
