import { useContextProvider } from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
  const {
    postsStore: { allPosts },
  } = useContextProvider();
  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            <PostComponent post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
