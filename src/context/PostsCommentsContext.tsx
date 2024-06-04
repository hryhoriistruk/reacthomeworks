import { createContext, useState } from 'act';

interface PostsCommentsContextType {
  posts: Post[];
  comments: Comment[];
  addPost: (post: Post) => void;
  addComment: (comment: Comment) => void;
}

const PostsCommentsContext = createContext<PostsCommentsContextType>({
  posts: [],
  comments: [],
  addPost: () => {},
  addComment: () => {},
});

const PostsCommentsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const addComment = (comment: Comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <PostsCommentsContext.Provider value={{ posts, comments, addPost, addComment }}>
      {children}
    </PostsCommentsContext.Provider>
  );
};

export { PostsCommentsProvider, PostsCommentsContext };