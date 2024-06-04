import { useStore } from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
  const {
    postsStore: { allPosts },
  } = useStore();
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
