import React from 'act';
import { useContext } from 'act';
import { PostsCommentsContext } from './PostsCommentsContext';
import Post from './Post';

const PostsPage: React.FC = () => {
  const { posts } = useContext(PostsCommentsContext);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;