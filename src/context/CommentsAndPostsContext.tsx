import { createContext, useContext, useState } from "react";

const CommentsAndPostsContext = createContext<any>({});

export const useCommentsAndPosts = () => {
  return useContext(CommentsAndPostsContext);
};

export function CommentsAndPostsProvider({ children }: any) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <CommentsAndPostsContext.Provider value={{ posts, setPosts, comments, setComments }}>
      {children}
    </CommentsAndPostsContext.Provider>
  );
}