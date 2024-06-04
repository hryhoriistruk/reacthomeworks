import { useState } from "react";
import "./App.css";
import Comments from "./components/comments/CommentsComponent";
import PostsComponent from "./components/posts/PostsComponent";
import { CommentModel } from "./models/CommentModel";
import { getAllCommentsOfSignlePost } from "./services/jph.api.service";

const App = () => {
  const [comments, setComments] = useState<CommentModel[]>([]);
  function lift(postId: number): void {
    getAllCommentsOfSignlePost(postId).then(({ data }) => setComments(data));
  }

  return (
    <div className="App">
      <div className="posts">
        <PostsComponent lift={lift} />
      </div>
      <div className="comments">
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default App;
