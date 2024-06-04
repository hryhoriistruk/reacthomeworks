import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPostModel } from "../../models/PostModel";
import { userApiSerivce } from "../../services/api.service";
import "./PostsComponent.css";

const PostsComponent = () => {
  const [posts, setPosts] = useState<IPostModel[]>([]);
  useEffect(() => {
    userApiSerivce.getAllPosts().then((val) => {
      setPosts(val.data);
    });
  }, []);
  return (
    <div>
      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <br />
            <div>
              <Link to={`/posts/${post.id}/comments`}>Comments</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
