import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICommentModel } from "../../models/CommentModel";
import { userApiSerivce } from "../../services/api.service";
import "./CommentsByPostComponent.css";

const CommentsByPostComponent = () => {
  const { postId } = useParams();

  const [comments, setComments] = useState<ICommentModel[]>([]);
  useEffect(() => {
    if (postId) {
      userApiSerivce.getCommentsByPost(postId).then((val) => {
        setComments(val.data);
      });
    }
  }, [postId]);
  return (
    <div>
      <ul className="commentList">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>
              {comment.name} <i>{comment.email}</i>
            </h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsByPostComponent;
