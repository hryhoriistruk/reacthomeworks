import React from 'act';
import { useContext } from 'act';
import { PostsCommentsContext } from './PostsCommentsContext';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<Post> = ({ id, title, body }) => {
  const { comments } = useContext(PostsCommentsContext);
  const postComments = comments.filter((comment) => comment.postId === id);

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Comments:</h3>
      <ul>
        {postComments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;