import React from 'act';
import { useContext } from 'act';
import { PostsCommentsContext } from './PostsCommentsContext';

const CommentsPage: React.FC = () => {
  const { comments } = useContext(PostsCommentsContext);

  return (
    <div>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;