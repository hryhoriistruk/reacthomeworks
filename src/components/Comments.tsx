import { useState } from "react";

interface CommentsProps {
  postId: string;
  onAddComment: (postId: string, comment: string) => void;
}

const Comments: React.FC<CommentsProps> = ({ postId, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddComment(postId, comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default Comments;