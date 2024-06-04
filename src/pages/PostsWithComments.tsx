import { useCommentsAndPosts } from "../CommentsAndPostsContext";
import { Post } from "../types";

interface PostsWithCommentsProps {
  posts: Post[];
}

const PostsWithComments: React.FC<PostsWithCommentsProps> = ({ posts }) => {
  const { comments, setComments } = useCommentsAndPosts();

  const addComment = (postId: string, comment: string) => {
    setComments([...comments, { postId, text: comment }]);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Comments postId={post.id} onAddComment={addComment} />
        </div>
      ))}
    </div>
  );
};

export default PostsWithComments;